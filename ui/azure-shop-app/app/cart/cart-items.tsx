"use client";

import { Panel } from "@/components/panel";
import { useShopContext } from "app/shop/shop-context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { placeOrder } from "./services/order-service";

export const CartItems = () => {
  const context = useShopContext();
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);

  const placeAndCompleteOrder = async () => {
    if (isFetching) return;

    try {
      setIsFetching(true);
      await placeOrder(context.cart);
      context.clearCart();
      router.push("/");
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  };

  const totalCost = (price: number, quantity: number) => {
    // rounde to 2 decimal places and multiply by quantity to get total cost
    const p = price * quantity;

    const returnPrice = Math.round(p * 100) / 100;
    return returnPrice;
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      {context.cart.map((item, index) => (
        <Panel
          className="grid grid-cols-12 grid-flow-col gap-4 flex-1"
          key={index}
        >
          <div className="col-span-4">{item.prodct.name}</div>
          <div className="">{item.quantity}</div>
          <div className="">${totalCost(item.prodct.price, item.quantity)}</div>
        </Panel>
      ))}
      <div className="py-4">
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isFetching ? "animate-pulse" : ""
          }`}
          onClick={() => placeAndCompleteOrder()}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
