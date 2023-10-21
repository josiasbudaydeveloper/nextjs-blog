import { getSortedPostsData } from '../../utils/posts';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const allPostsData = getSortedPostsData();
  res.status(200).json({ allPostsData });
}