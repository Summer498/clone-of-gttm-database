import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.setHeader("Content-Type", "text/plain; charaset=utf-8");
  res.status(200).json({ message: 'Hello from Next.js!' })
}
