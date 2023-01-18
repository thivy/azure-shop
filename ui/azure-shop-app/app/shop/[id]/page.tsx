import { ProudctResults } from "@features/shop/product-results";
import { Suspense } from "react";

export const revalidate = 0;

export default function Shop({ params }: any) {
  return (
    <Suspense fallback={<div>loading products</div>}>
      {/* @ts-expect-error Server Component */}
      <ProudctResults id={params.id} />
    </Suspense>
  );
}
