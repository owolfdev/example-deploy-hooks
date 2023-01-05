// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const contentful = require("contentful");

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("hello from api/contentful.js");
  res.status(200).json({ name: "John Doe" });
}

export async function getPosts() {
  console.log("getPosts");
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "post" });

  if (res.items) return res.items;
  //console.log(`Error getting Entries for ${contentType.name}.`);
}
