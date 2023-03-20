import { uiDebug } from "@features/settings";
import Pagination from "@features/shop/Pagination";
import { ProudctResults } from "@features/shop/product-results";
import { ProudctsLoading } from "@features/shop/products-loading";
import { preloadProdutsPageData } from "@features/shop/services/product-service";
import { Suspense } from "react";

export const revalidate = 0;

export default function Shop({ params }: any) {
  //TODO: Demo add preload
  preloadProdutsPageData();
  return (
    <div className={`my-4 ${uiDebug(false)}`}>
      <Suspense fallback={<ProudctsLoading />}>
        {/* TODO: demo add suspense */}
        {/* @ts-expect-error Server Component */}
        <Pagination activePage={params.id} />
        {/* @ts-expect-error Server Component */}
        <ProudctResults id={params.id} />
      </Suspense>
    </div>
  );
}

// const WithSuspense = ({ id }: { id: number }) => {
//   return (
//     <Suspense fallback={<ProudctsLoading />}>
//       {/* @ts-expect-error Server Component */}
//       <Pagination activePage={id} />
//       {/* @ts-expect-error Server Component */}
//       <ProudctResults id={id} />
//     </Suspense>
//   );
// };
