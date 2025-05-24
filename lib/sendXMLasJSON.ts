import type { NextApiResponse } from 'next'
import { xml_parser } from './XMLParser';

export const sendXMLasJSON = (res: NextApiResponse<object | undefined>) => (
  err: NodeJS.ErrnoException | null,
  data: string
) => {
  if (err) {
    res.status(500).json(err)
    return
  }
  const json = xml_parser.parse(data);
  res.status(200).json(json)
}
