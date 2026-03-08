import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenRouter } from "@openrouter/sdk";

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
  // entire message
  const data = await req.json();
  // initialize clients
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });
  const index = pc.index("rag").namespace("ns1");
  const openrouter = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });
  // users last message
  const text = data[data.length - 1].content;
  // I am creating an embedding to vectorize the last user message
  const embedding = await openrouter.embeddings.generate({
    requestBody: {
      model: "nvidia/llama-nemotron-embed-vl-1b-v2:free",
      input: text,
      encoding_format: "float",
    },
  });

  // given the value of the user message I am getting the top k reviews from the database and returning it as a string
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
  // console.log("🚀 ~ POST ~ lastMessage:", lastMessage)
  // console.log("🚀 ~ POST ~ lastMessageContent:", lastMessageContent)
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);
  // console.log("🚀 ~ POST ~ lastDataWithoutLastMessage:", lastDataWithoutLastMessage)
  // i am giving the system my message plus the returned results and it responds with a tailored message combining my query and the results
  const completion = await openrouter.chat.send({
    chatGenerationParams: {
      model: "nvidia/nemotron-3-nano-30b-a3b:free",
      messages: [
        { role: "system", content: systemPrompt },
        ...lastDataWithoutLastMessage,
        { role: "user", content: lastMessageContent },
      ],
      stream: true,
    },
  });

  // completion is a array of tokens and it converts them into text stringing them into a message
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
