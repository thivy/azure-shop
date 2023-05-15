"use server";
import { fetcher } from "@features/core/fetch/app-fetch";
import { cache } from "react";
import { IProductResponse, IResponse, IVote } from "./models";

export const getProducts = cache(
  async (page: number = 1): Promise<IProductResponse> => {
    const api = `${process.env.CMS_API}/api/collections/products/records?page=${page}`;
    const res = await fetcher(api);
    return res.json();
  }
);

export const getProductVotes = cache(async (): Promise<IResponse<IVote>> => {
  const api = `${process.env.HOST}/api/vote`;
  const res = await fetcher(api);
  return res.json();
});

export const addProductVotes = async (
  productId: string,
  vote: string
): Promise<void> => {
  const _vote = { product: productId, vote: vote };
  const api = `${process.env.CMS_API}/api/collections/votes/records`;
  const res = await fetcher(api, {
    method: "POST",
    body: JSON.stringify(_vote),
  });
};

export const getFeaturedProducts = cache(
  async (): Promise<IProductResponse | null> => {
    const api = `${process.env.CMS_API}/api/collections/products/records?filter=featured=true`;
    const res = await fetcher(api);

    return res.json();
  }
);
