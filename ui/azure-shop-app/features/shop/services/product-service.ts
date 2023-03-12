import { IProductResponse, IResponse, IVote } from "./models";

export const preload = () => {
  void getProductVotes();
  void getProducts();
};

export const getProducts = async (
  page: number = 1
): Promise<IProductResponse> => {
  // TODO: demo add network latency
  // await sleep(5);
  const api = `${process.env.CMS_API}/api/collections/products/records` ?? "";
  const res = await fetch(`${api}?page=${page}`);
  return res.json();
};

export const getProductVotes = async (): Promise<IResponse<IVote>> => {
  // TODO: demo multiple API calls
  // console.log("getProductVotes");
  const api = `${process.env.HOST}/api/vote` ?? "";
  const res = await fetch(`${api}`);
  return res.json();
};

export const getFeaturedProducts =
  async (): Promise<IProductResponse | null> => {
    const api =
      `${process.env.CMS_API}/api/collections/products/records?filter=featured=true` ??
      "";

    const res = await fetch(`${api}`);

    return res.json();
  };

// return a promise that resolves after seconds
export const sleep = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));
