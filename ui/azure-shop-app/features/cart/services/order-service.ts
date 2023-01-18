import { IOrder } from "./models";

export const placeOrder = async (order: IOrder) => {
  await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};
