import { Suspense } from "react";
import ShopResults from "../shop-results";

export const revalidate = 0;

export default function Shop({ params }: any) {
  return (
    <Suspense fallback={<div>loading products</div>}>
      {/* @ts-ignore*/}
      <ShopResults id={params.id} />
    </Suspense>
  );
}
