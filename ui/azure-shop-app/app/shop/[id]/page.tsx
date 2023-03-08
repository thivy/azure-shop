import Pagination from "@features/shop/Pagination";
import { ProudctResults } from "@features/shop/product-results";

export const revalidate = 0;

export default function Shop({ params }: any) {
  return (
    <div className=" my-4 ">
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
