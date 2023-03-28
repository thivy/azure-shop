import { cache } from "react";
import { IProductResponse, IResponse, IVote } from "./models";

export const preloadProductsPageData = () => {
  void getProductVotes();
  void getProducts();
};

export const getProducts = async (
  page: number = 1
): Promise<IProductResponse> => {
  const api = `${process.env.CMS_API}/api/collections/products/records` ?? "";
  const res = await fetch(`${api}?page=${page}`);
  return res.json();
};

export const getProductVotes = cache(async (): Promise<IResponse<IVote>> => {
  const api = `${process.env.HOST}/api/vote` ?? "";
  const res = await fetch(`${api}`);
  return res.json();
});

export const getFeaturedProducts =
  async (): Promise<IProductResponse | null> => {
    const api =
      `${process.env.CMS_API}/api/collections/products/records?filter=featured=true` ??
      "";

    const res = await fetch(`${api}`);

    return res.json();
  };
