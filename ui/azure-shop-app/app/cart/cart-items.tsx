"use client";

import { Panel } from "@/components/panel";
import { useShopContext } from "app/shop/shop-context";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { placeOrder } from "./services/order-service";

interface IProp {}

export const CartItems: FC<IProp> = (props) => {
  const context = useShopContext();
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);

  const [email, setEmail] = useState<string>("");

  const placeAndCompleteOrder = async () => {
    if (isFetching || email.length === 0) return;

    try {
      setIsFetching(true);
      await placeOrder({ cart: context.cart, email: email });
      context.clearCart();
      router.push("/");
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  };

  const totalCost = (price: number, quantity: number) => {
    const p = price * quantity;
    const returnPrice = Math.round(p * 100) / 100;
    return returnPrice;
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      <Panel>
        <input
          type={"text"}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </Panel>
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
