"use server";
import { fetcher } from "@features/core/fetch/app-fetch";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { cache } from "react";
import { IProductResponse, IResponse, IVote } from "./models";

export const getProducts = cache(
  async (page: number = 1): Promise<IProductResponse> => {
    const api = `${process.env.CMS_API}/api/collections/products/records?page=${page}`;
    const res = await fetcher(api);
    return res.json();
  }
);

export const getProductVotes = cache(
  async (productId: string): Promise<{ [key: string]: number }> => {
    const api = `${process.env.CMS_API}/api/collections/votes/records?filter=product='${productId}'&perPage=500`;
    const response = await fetcher(api, {}, [getVoteCache(productId)]);
    const result = (await response.json()) as IResponse<IVote>;

    // count the number of votes for each of these vote types 👍 | 🧡 | 🤣
    const votes = result.items.reduce((acc, vote) => {
      if (acc[vote.vote]) {
        acc[vote.vote] += 1;
      } else {
        acc[vote.vote] = 1;
      }
      return acc;
    }, {} as { [key: string]: number });

    return votes;
  }
);

export const getProductVotesForUser = cache(
  async (productId: string): Promise<{ [key: string]: number }> => {
    const api = `${process.env.CMS_API}/api/collections/votes/records?filter=product='${productId}'&perPage=500`;
    const response = await fetcher(api, {}, [getVoteCache(productId)]);
    const result = (await response.json()) as IResponse<IVote>;

    // count the number of votes for each of these vote types 👍 | 🧡 | 🤣
    const votes = result.items.reduce((acc, vote) => {
      if (acc[vote.vote]) {
        acc[vote.vote] += 1;
      } else {
        acc[vote.vote] = 1;
      }
      return acc;
    }, {} as { [key: string]: number });

    return votes;
  }
);

export const setUniqueIdForUser = () => {
  "use server";
  const cookie = cookies();
  let uui = cookie.get("uui");
  if (uui) {
    return uui;
  } else {
    uui = { name: "uui", value: randomUUID() };
    // @ts-ignore
    cookies().set("uui", uui);
  }

  return uui?.value;
};

export const addProductVotes = async (
  productId: string,
  vote: string
): Promise<void> => {
  const _vote = { product: productId, vote: vote };
  const api = `${process.env.CMS_API}/api/collections/votes/records`;
  setUniqueIdForUser();
  await fetcher(
    api,
    {
      method: "POST",
      body: JSON.stringify(_vote),
    },
    [getVoteCache(productId)]
  );
};

export const getVoteCache = (productId: string) => {
  return `votes-${productId}`;
};

export const getFeaturedProducts = cache(
  async (): Promise<IProductResponse | null> => {
    const api = `${process.env.CMS_API}/api/collections/products/records?filter=featured=true`;
    const res = await fetcher(api);

    return res.json();
  }
);
