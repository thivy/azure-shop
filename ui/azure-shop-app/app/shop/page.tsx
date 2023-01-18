import FooterPage from "@features/shop/footer-page";
import { ProudctResults } from "@features/shop/product-results";
import { Suspense } from "react";

export const revalidate = 30;

export default async function Shop() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <FooterPage activePage={1} />
      <Suspense fallback={<div>loading products</div>}>
        {/* @ts-expect-error Server Component */}
        <ProudctResults id={1} />
      </Suspense>
    </>
  );
}
