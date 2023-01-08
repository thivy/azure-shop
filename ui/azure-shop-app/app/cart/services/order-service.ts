import { IcartItem } from "app/shop/shop-context";

export const placeOrder = async (cartItem: Array<IcartItem>) => {
  await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItem),
  });
};
