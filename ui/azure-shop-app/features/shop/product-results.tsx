import { ProudctResultItem } from "./product-result-item";
import { getProducts } from "./services/product-service";

export const ProudctResults = async ({ id }: any) => {
  const data = await getProducts(id);

  return (
    <div className="grid lg:grid-cols-4 my-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ">
      {data
        ? data.items.map((product, index) => (
            <ProudctResultItem key={index} product={product} />
          ))
        : null}
    </div>
  );
};
