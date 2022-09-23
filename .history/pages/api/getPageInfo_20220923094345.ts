import { PageInfo } from './../../typings.d';
import type { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity"

const query = groq`*[_type == "pageInfo"]`;



type Data = {
  pageInfo: PageInfo;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo })
}
