import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "h31zqnzw",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
}


export const sanityClient = createClient(config)

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => {
    return builder.image(source)
}

