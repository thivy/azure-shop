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
  featured: boolean;
  vector_description: object;
}

export interface IVote {
  product: string;
  vote: string;
  count: number;
}

export interface IResponse<T> {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: T[];
}
