import { client } from '@/sanity/lib/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

type Data = {
  projects: Project[];
};

const query = groq`
    *[_type == "projects"]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const projects: Project[] = await client.fetch(query);
    return res.status(200).json({
      projects: projects,
    });
  } catch (e) {
    console.error('Something went wrong!!!!', e);
    res.status(500).json({
      projects: [],
    });
  }
}
