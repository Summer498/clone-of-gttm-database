import type { NextApiRequest, NextApiResponse } from 'next'
import { song_list } from '../../lib/song-list';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json(song_list)
}
