import { client } from "@/sanity/lib/client";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
    skills: Skill[],
}

const query = groq`
    *[_type == "skill"]
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        const skill: Skill[] = await client.fetch(query);
        return res.status(200).json({
            skills: skill,
        });
    } catch (e) {
        console.error('Something went wrong!!!!', e)
        res.status(500).json({
            skills: [],
        })
    }
}