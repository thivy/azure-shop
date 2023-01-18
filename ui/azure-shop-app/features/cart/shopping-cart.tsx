"use client";

import { useShopContext } from "@features/shop/shop-context";
import { CartItem } from "./cart-item";

export const ShoppingCart = () => {
  const context = useShopContext();

  return (
    <div className="flex flex-1 flex-col gap-4 col-span-4">
      {context.cart.map((item, index) => (
        <CartItem item={item} key={index} />
      ))}
    </div>
  );
};
