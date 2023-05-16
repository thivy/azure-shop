export interface IOrder {
  orderid: string;
  product: string;
  quantity: string;
  productname: string;
}

export interface IResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: IOrder[];
}
