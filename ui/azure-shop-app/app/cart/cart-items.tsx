"use client";

import { Panel } from "@/components/panel";
import { useShopContext } from "app/shop/shop-context";
import Image from "next/image";
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
    <div className="grid lg:grid-cols-6 gap-6 flex-1">
      <div className="flex flex-1 flex-col gap-4 col-span-4">
        {context.cart.map((item, index) => (
          <Panel
            className="grid grid-cols-12 grid-flow-col gap-4 flex-1 items-center"
            key={index}
          >
            <Image
              src={item.prodct.image}
              alt={item.prodct.name}
              width={50}
              height={30}
            />
            <div className="col-span-4 font-semibold">{item.prodct.name}</div>
            <div className="">{item.quantity}</div>
            <div className="text-green-500">
              ${totalCost(item.prodct.price, item.quantity)}
            </div>
          </Panel>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-4 col-span-2">
        <Panel className="flex flex-col gap-4">
          <p>
            You will receive an email containing confirmation of your order.
          </p>
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
    </div>
  );
};
