import { readFile } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'
import { sendXMLasJSON } from './sendXMLasJSON';

export const handlerFrame = (mode:string) => (
  req: NextApiRequest,
  res: NextApiResponse<object | undefined>
) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const { tune } = req.query;
  readFile(
    `${process.cwd()}/example/${tune}/${mode}-${tune}.xml`,
    "utf8",
    sendXMLasJSON(res)
  )
}
