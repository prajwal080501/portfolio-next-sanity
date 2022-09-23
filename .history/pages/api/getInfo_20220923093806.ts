import { groq } from "next-sanity";
import { sanityClient } from "../../sanity"
import { Info } from "../../typings";


const query = groq`*[_type == "info"]`;


type Data = {
    info: Info;
}
export default async function handler(

    req: any,
    res: any
) {
    const info: Info = await sanityClient.fetch(query);
    res.status(200).json({ info })
}
