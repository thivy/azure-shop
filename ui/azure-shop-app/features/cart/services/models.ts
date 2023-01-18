import { IProduct } from "@features/shop/services/models";

export interface IOrder {
  cart: Array<IcartItem>;
  email: string;
}

export interface IcartItem {
  prodct: IProduct;
  quantity: number;
}
