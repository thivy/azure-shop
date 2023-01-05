"use client";

import { Panel } from "@/components/panel";
import { IcartItem, useShopContext } from "app/shop/shop-context";
import { useRouter } from "next/navigation";

const addToCart = async (cartItem: Array<IcartItem>) => {
  await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItem),
  });
};

export const CartItems = () => {
  const context = useShopContext();
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col gap-4">
      {context.cart.map((item, index) => (
        <Panel
          className="grid grid-cols-12 grid-flow-col gap-4 flex-1"
          key={index}
        >
          <div className="col-span-4">{item.prodct.name}</div>
          <div className="">{item.quantity}</div>
          <div className="">${item.quantity * item.prodct.price}</div>
        </Panel>
      ))}
      <div className="py-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={async () => {
            await addToCart(context.cart);
            context.clearCart();
            router.push("/");
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
