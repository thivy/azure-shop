import { Panel } from "@/components/panel";
import Image from "next/image";
import { FC } from "react";
import { IcartItem } from "./services/models";

interface IProp {
  item: IcartItem;
}

export const CartItem: FC<IProp> = (props) => {
  const { item } = props;

  const totalCost = (price: number, quantity: number) => {
    const p = price * quantity;
    const returnPrice = Math.round(p * 100) / 100;
    return returnPrice;
  };

  return (
    <Panel className="grid grid-cols-12 grid-flow-col gap-4 flex-1 items-center">
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
  );
};
