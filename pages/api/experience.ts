import { client } from "@/sanity/lib/client";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
    experience: Experience[],
}

const query = groq`
    *[_type == "experienceCard"]
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        const experience: Experience[] = await client.fetch(query);
        return res.status(200).json({
            experience: experience,
        });
    } catch (e) {
        console.error('Something went wrong!!!!', e)
        res.status(500).json({
            experience: [],
        })
    }
}