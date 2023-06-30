import { client } from '@/sanity/lib/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

type Data = {
  about: About[];
};

const query = groq`
    *[_type == "about"]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const about: About[] = await client.fetch(query);
    return res.status(200).json({
      about: about,
    });
  } catch (e) {
    console.error('Something went wrong!!!!', e);
    res.status(500).json({
      about: [],
    });
  }
}
