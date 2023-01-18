import { IProductResponse } from "./models";

export const getProducts = async (
  page: number = 1
): Promise<IProductResponse | null> => {
  const api = process.env.SHOP_API ?? "";

  try {
    const res = await fetch(`${api}?page=${page}`);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (e) {
    console.log("Failed to FETCH", e);
    return null;
  }
};
