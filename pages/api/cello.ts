// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "interfaces/types";

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.json({ name: "Muhammad Cello el-Zhafran", gender: "boy" });
};
