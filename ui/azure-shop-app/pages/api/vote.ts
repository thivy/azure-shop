import { IResponse, IVote } from "@features/shop/services/models";
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
  //TODO: demo show only one API being called
  // console.log("vote API")
  try {
    const items: IResponse<IVote> = {
      page: 1,
      perPage: 1,
      totalItems: 1,
      totalPages: 1,
      items: [
        {
          count: 5,
          product: "1",
          vote: "👍",
        },
        {
          count: 8,
          product: "1",
          vote: "🧡",
        },
        {
          count: 24,
          product: "1",
          vote: "🤣",
        },
      ],
    };
    res.status(200).json(items);
  } catch (e) {
    res.status(200).json(e);
  }
}
