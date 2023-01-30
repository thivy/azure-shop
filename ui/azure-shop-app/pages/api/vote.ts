import { IVote } from "@features/shop/services/models";
import { NextApiRequest, NextApiResponse } from "next";
import PocketBase from "pocketbase";

export const pb = new PocketBase(process.env.CMS_API);

const vote = async (vote: IVote) => {
  const record = await pb.collection("votes").create(vote);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await vote(req.body);
    res.status(200).json("done");
  } catch (e) {
    res.status(200).json(e);
  }
}
