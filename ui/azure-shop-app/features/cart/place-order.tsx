"use client";

import { Panel } from "@/components/panel";
import { useShopContext } from "@features/shop/shop-context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { placeOrder } from "./services/order-service";

export const PlaceOrder = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const context = useShopContext();

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

  return (
    <div className="flex flex-1 flex-col gap-4 col-span-2">
      <Panel className="flex flex-col gap-4">
        <p>You will receive an email containing confirmation of your order.</p>
        <input
          type={"text"}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isFetching ? "animate-pulse" : ""
          }`}
          onClick={() => placeAndCompleteOrder()}
        >
          Place Order
        </button>
      </Panel>
    </div>
  );
};
