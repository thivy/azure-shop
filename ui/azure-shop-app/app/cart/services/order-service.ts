import { IOrder } from "app/shop/shop-context";

export const placeOrder = async (order: IOrder) => {
  await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};
