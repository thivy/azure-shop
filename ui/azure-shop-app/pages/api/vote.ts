import { IResponse, IVote } from "@features/shop/services/models";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
