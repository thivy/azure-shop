"use client";

import { Panel } from "@/components/panel";
import { useShopContext } from "app/shop/shop-context";
import { useRouter } from "next/navigation";
import { placeOrder } from "./services/order-service";

export const CartItems = () => {
  const context = useShopContext();
  const router = useRouter();

  const placeAndCompleteOrder = async () => {
    await placeOrder(context.cart);
    context.clearCart();
    router.push("/");
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
          <div className="">${item.quantity * item.prodct.price}</div>
        </Panel>
      ))}
      <div className="py-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => placeAndCompleteOrder()}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};