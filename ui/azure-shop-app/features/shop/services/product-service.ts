import { cache } from "react";
import { IProductResponse, IResponse, IVote } from "./models";

export const preloadProdutsPageData = () => {
  void getProductVotes();
  void getProducts();
};

export const getProducts = async (
  page: number = 1
): Promise<IProductResponse> => {
  // TODO: demo add network latency
  //https://demo-shop-cms.victoriousfield-37fea9bd.australiaeast.azurecontainerapps.io/api/collections/products/records?page=3
  await wait(5000);
  const api = `${process.env.CMS_API}/api/collections/products/records` ?? "";
  const res = await fetch(`${api}?page=${page}`);
  return res.json();
};

export const getProductVotes = cache(async (): Promise<IResponse<IVote>> => {
  // TODO: demo multiple API calls
  // console.log("getProductVotes");
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

// create a function that resolves a promise after a certain amount of time
export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
