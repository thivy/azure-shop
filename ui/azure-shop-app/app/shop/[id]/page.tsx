import { uiDebug } from "@features/settings";
import Pagination from "@features/shop/Pagination";
import { ProductResults } from "@features/shop/product-results";
import { ProductsLoading } from "@features/shop/products-loading";
import { Suspense } from "react";

export default function Shop({ params }: any) {
  return (
    <div className={`my-4 ${uiDebug(false)}`}>
      <Suspense fallback={<ProductsLoading />}>
        {/* @ts-expect-error Server Component */}
        <Pagination activePage={params.id} />
      </Suspense>
      <Suspense fallback={<ProductsLoading />}>
        {/* @ts-expect-error Server Component */}
        <ProductResults id={params.id} />
      </Suspense>
    </div>
  );
}
