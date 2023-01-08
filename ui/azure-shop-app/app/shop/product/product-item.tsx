import { Panel } from "@/components/panel";
import Image from "next/image";
import { FC } from "react";
import { AddToCartButton } from "./add-to-cart-button";
import { IProduct } from "./product-models";

export const ProductItem: FC<IProduct> = (props) => {
  return (
    <Panel className="justify-center flex flex-col gap-4">
      <Image
        className="self-center "
        src={`${process.env.CMS_API}/api/files/${props.collectionId}/${props.id}/${props.image}`}
        alt={props.name}
        width={350}
        height={30}
      />

      <div className="text-slate-400">{props.name}</div>
      <div className="flex flex-row items-center justify-between gap-4">
        <div>${props.price}</div>
        <AddToCartButton product={props} />
      </div>
    </Panel>
  );
};
