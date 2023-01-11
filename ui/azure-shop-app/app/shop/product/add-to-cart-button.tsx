"use client";

import { FC } from "react";
import { IProduct } from "../services/product-service";
import { useShopContext } from "../shop-context";

interface IProp {
  product: IProduct;
}

export const AddToCartButton: FC<IProp> = (props: IProp) => {
  const { product } = props;
  const { addToCart, removeFromCart, productCount } = useShopContext();

  return (
    <div className="flex gap-4 items-center">
      <button
        type="button"
        className="bg-purple-600/40 text-white rounded-md px-4 py-2 font-bold  hover:bg-purple-600/90"
        onClick={() => removeFromCart({ quantity: 1, prodct: product })}
      >
        -
      </button>
      {productCount(product.id)}
      <button
        type="button"
        className="bg-purple-600/40 text-white rounded-md px-4 py-2 font-bold  hover:bg-purple-600/90"
        onClick={() => addToCart({ quantity: 1, prodct: product })}
      >
        +
      </button>
    </div>
  );
};
