import { Section } from "@components/section";
import { ProudctResultItem } from "@features/shop/product-result-item";
import { getFeaturedProducts } from "@features/shop/services/product-service";

export const FeaturedProducts = async () => {
  const data = await getFeaturedProducts();
  return (
    <>
      <Section>
        <h5 className="mb-6 text-purple-600">Featured products</h5>
        <h3 className="display-4">Handpicked for you</h3>
        <p className="py-6">
          Explore Azure services that are picked just for you
        </p>
        <div className="grid lg:grid-cols-4 my-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ">
          {data
            ? data.items.map((product, index) => (
                <ProudctResultItem key={index} product={product} />
              ))
            : null}
        </div>
      </Section>
    </>
  );
};
