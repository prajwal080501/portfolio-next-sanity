import { Skill, SkillSet } from '../../typings';
import type { NextApiResponse, NextApiRequest } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity"
import { Social } from "../../typings";


const query = groq`*[_type == "skillset"]`
type Data = {
    skillset: SkillSet[];
};


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skillset: SkillSet[] = await sanityClient.fetch(query);
    res.status(200).json({ skillset })
}