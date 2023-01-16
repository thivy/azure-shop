import { Suspense } from "react";
import FooterPage from "./footer-page";
import ShopResults from "./shop-results";

export const revalidate = 30;

export default async function Shop() {
  return (
    <>
      {/* @ts-ignore*/}
      <FooterPage activePage={1} />
      <Suspense fallback={<div>loading products</div>}>
        {/* @ts-ignore*/}
        <ShopResults id={1} />
      </Suspense>
    </>
  );
}
