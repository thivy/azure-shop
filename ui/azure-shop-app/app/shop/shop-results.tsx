import { ProductItem } from "./product/product-item";
import { getProducts } from "./services/product-service";

export default async function ShopResults({ id }: any) {
  const data = await getProducts(id);

  return (
    <div className="grid grid-flow-row lg:grid-cols-4 my-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ">
      {data
        ? data.items.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))
        : null}
    </div>
  );
}
