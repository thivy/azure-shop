import { IProduct } from "@features/shop/services/models";

export interface IOrder {
  cart: Array<ICartItem>;
  email: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
