import { Panel } from "@/components/panel";
import { IProductResponse } from "./product.models";
import Image from "next/image";
import { AddToCartButton } from "./add-to-cart-button";
import { ProductItem } from "./product-item";

async function getData(): Promise<IProductResponse> {
  const res = await fetch(process.env.SHOP_API ?? "");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Shop() {
  const data = await getData();

  return (
    <div className="grid grid-flow-row grid-cols-4 my-4 gap-4">
      {data.items.map((product) => (
        <ProductItem {...product} />
      ))}
    </div>
  );
}
