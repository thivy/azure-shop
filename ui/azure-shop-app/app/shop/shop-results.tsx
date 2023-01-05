import { ProductItem } from "./product/product-item";
import { IProductResponse } from "./product/product-models";

async function getData(): Promise<IProductResponse | null> {
  try {
    const res = await fetch(process.env.SHOP_API ?? "");
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (e) {
    console.log("Failed to FETCH", e);
    return null;
  }
}

export default async function ShopResults() {
  const data = await getData();

  return (
    <div className="grid grid-flow-row grid-cols-4 my-4 gap-4">
      {data
        ? data.items.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))
        : null}
    </div>
  );
}
