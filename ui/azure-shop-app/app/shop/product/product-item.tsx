import { Panel } from "@/components/panel";
import Image from "next/image";
import { FC } from "react";
import { IProduct } from "../services/product-service";
import { AddToCartButton } from "./add-to-cart-button";

export const ProductItem: FC<IProduct> = (props) => {
  const _prop = {
    ...props,
    image: `${process.env.CMS_API}/api/files/${props.collectionId}/${props.id}/${props.image}`,
  };
  return (
    <Panel className="justify-center flex flex-col gap-8">
      <div className="text-slate-400">{props.name}</div>
      <Image
        className="self-center p-4"
        src={_prop.image}
        alt={props.name}
        width={350}
        height={30}
      />

      <div className="flex flex-row items-center justify-between gap-4">
        <div>${props.price}</div>
        <AddToCartButton product={_prop} />
      </div>
    </Panel>
  );
};
