import { client } from "@/sanity/lib/client";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
    socials: Social[],
}

const query = groq`
    *[_type == "social"]
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        const socials: Social[] = await client.fetch(query);
        return res.status(200).json({
            socials: socials,
        });
    } catch (e) {
        console.error('Something went wrong!!!!', e)
        res.status(500).json({
            socials: [],
        })
    }
}