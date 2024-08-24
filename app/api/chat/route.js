import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";

const systemPrompt = `
You are an intelligent assistant specialized in helping students find the most 
compatible professors based on their specific needs. Students will provide you 
with a query detailing their preferences, such as teaching style, course difficulty,
availability, or subject matter expertise. 
Your role is to search through a vast database of professor reviews, ratings, and profiles
to identify the top 3 professors who best match the student's criteria.
Use Retrieval-Augmented Generation (RAG) to pull in relevant data from multiple sources, 
combining it with your knowledge to generate accurate, insightful, and personalized recommendations.
Ensure your responses are concise, informative, and provide reasoning behind your selections.
Always prioritize compatibility with the student's preferences to help them make the most informed
decision."
`;

export async function POST(req) {
  const data = await req.json();
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });
  const index = pc.index("rag").namespace("ns1");
  const openai = new OpenAI();

  const text = data[data.length - 1].content;
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    encoding_format: "float",
  });
  const results = await index.query({
    topK: 3,
    includeMetadata: true,
    vector: embedding.data[0].embedding,
  });
  let resultString = "Returned results:";
  results.matches.forEach((match) => {
    resultString += `\n
        Professor: ${match.id}
        Review: ${match.metadata.stars}
        Subject: ${match.metadata.subject}
        Stars: ${match.metadata.stars}
        \n\n
        `;
  });

  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      ...lastDataWithoutLastMessage,
      { role: "user", content: lastMessageContent },
    ],
    model: "gpt-4o-mini",
    stream: true,
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (error) {
        controller.error(error);
      } finally {
        controller.close();
      }
    },
  });
  return new NextResponse(stream);
}
