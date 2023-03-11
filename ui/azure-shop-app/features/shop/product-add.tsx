"use client";

import { AddRemoveButton } from "@components/cart/add-remove-button";
import { useShopContext } from "@features/shop/shop-context";
import { FC } from "react";
import { IProduct } from "./services/models";

interface IProp {
  product: IProduct;
}

export const ProductAdd: FC<IProp> = (props) => {
  const { product } = props;
  const { addToCart, removeFromCart, productCount } = useShopContext();
  return (
    <AddRemoveButton
      remove={() => removeFromCart({ quantity: 1, prodct: product })}
      add={() => addToCart({ quantity: 1, prodct: product })}
      value={productCount(product.id)}
    />
  );
};
