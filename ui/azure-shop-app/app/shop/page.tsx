import { Suspense } from "react";
import ShopResults from "./shop-results";

export const revalidate = 0;

export default function Shop() {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        {/* @ts-ignore*/}
        <ShopResults />
      </Suspense>
    </div>
  );
}
