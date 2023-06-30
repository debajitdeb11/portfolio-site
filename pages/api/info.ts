import { client } from '@/sanity/lib/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

type Data = {
  info: Info[];
};

const query = groq`
    *[_type == "pageInfo"] {
        ...,
        social[] ->,
        profilePicture,
    }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const pageInfo: Info[] = await client.fetch(query);
    return res.status(200).json({
      info: pageInfo,
    });
  } catch (e) {
    console.error('Something went wrong!!!!', e);
    res.status(500).json({
      info: [],
    });
  }
}
