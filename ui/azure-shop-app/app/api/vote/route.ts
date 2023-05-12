import { IResponse, IVote } from "@features/shop/services/models";

export async function GET(request: Request) {
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

  return new Response(JSON.stringify(items));
}
