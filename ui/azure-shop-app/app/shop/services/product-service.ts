export const getProducts = async (): Promise<IProductResponse | null> => {
  try {
    const res = await fetch(process.env.SHOP_API ?? "");
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (e) {
    console.log("Failed to FETCH", e);
    return null;
  }
};

export interface IProductResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: IProduct[];
}

export interface IProduct {
  collectionId: string;
  collectionName: string;
  created: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  updated: string;
}
