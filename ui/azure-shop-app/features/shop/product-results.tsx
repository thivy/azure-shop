import { ProudctResultItem } from "./product-result-item";
import { getProducts } from "./services/product-service";

export const ProudctResults = async ({ id }: any) => {
  const data = await getProducts(id);
  return (
    <>
      {data
        ? data.items.map((product, index) => (
            <ProudctResultItem key={index} product={product} />
          ))
        : null}
    </>
  );
};