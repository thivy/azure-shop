import { uiDebug } from "@features/settings";
import { ProductResultItem } from "./product-result-item";
import { getProducts } from "./services/product-service";

export const ProductResults = async ({ id }: any) => {
  const data = await getProducts(id);
  return (
    <div
      className={`grid lg:grid-cols-4 my-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ${uiDebug(
        false
      )}`}
    >
      {data
        ? data.items.map((product, index) => (
            <ProductResultItem key={index} product={product} />
          ))
        : null}
    </div>
  );
};
