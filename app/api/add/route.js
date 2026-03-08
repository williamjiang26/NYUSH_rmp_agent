import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenRouter } from "@openrouter/sdk";
export async function POST(req) {
  // initialize clients
  const data = await req.json();
  console.log("🚀 ~ POST ~ data:", data);
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });
  const index = pc.index("rag").namespace("ns1");
  const openrouter = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });
  //   processed_data.append({
  //     "values": embedding,
  //     "id": review["professor"],
  //     "metadata": {
  //         "review": review["review"],
  //         "subject": review["subject"],
  //         "stars": review["stars"]
  //     // }data: {
  //   professor: 'wilson tam',
  //   stars: 5,
  //   subject: 'machine learning',
  //   review: 'Great at explaining complex concepts',
  // store new embedding
  const response = await openrouter.embeddings.generate({
    requestBody: {
      model: "nvidia/llama-nemotron-embed-vl-1b-v2:free",
      input: data["review"],
      encoding_format: "float",
    },
  });
  const embedding = response.data[0].embedding;
  let processed_data = [
    {
      values: embedding,
      id: data["professor"],
      metadata: {
        review: data["review"],
        subject: data["subject"],
        stars: data["stars"],
      },
    },
  ];
  await index.upsert(processed_data);
  return new Response(null, { status: 204 });
}
