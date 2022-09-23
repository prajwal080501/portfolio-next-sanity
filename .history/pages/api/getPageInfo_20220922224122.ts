import { PageInfo } from './../../typings.d';
import type { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity"
import { Social } from "../../typings";

const query = groq`*[_type == "pageInfo"][0]`
type Data = {
  pageData: PageInfo
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageData: PageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageData })
}
