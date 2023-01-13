import { Suspense } from "react";
import ShopResults from "../shop-results";

export const revalidate = 0;

export default function Shop({ params }: any) {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <h3 className="display-3 col-span-4">Products</h3>
        {/* @ts-ignore*/}
        <ShopResults id={params.id} />
      </Suspense>
    </>
  );
}
