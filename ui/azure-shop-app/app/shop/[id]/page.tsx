import { uiDebug } from "@features/settings";
import Pagination from "@features/shop/Pagination";
import { ProudctResults } from "@features/shop/product-results";

export const revalidate = 0;

export default function Shop({ params }: any) {
  //TODO: Demo add preload
  //preload();
  return (
    <div className={`my-4 ${uiDebug(false)}`}>
      {/* TODO: demo add suspense */}
      {/* @ts-expect-error Server Component */}
      <Pagination activePage={params.id} />
      {/* @ts-expect-error Server Component */}
      <ProudctResults id={params.id} />
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
