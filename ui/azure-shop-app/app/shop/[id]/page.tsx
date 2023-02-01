import FooterPage from "@features/shop/footer-page";
import { ProudctResults } from "@features/shop/product-results";
import { ProudctsLoading } from "@features/shop/products-loading";
import { Suspense } from "react";

export const revalidate = 0;

export default function Shop({ params }: any) {
  return (
    <div className=" my-4 ">
      <WithSuspense id={params.id} />
    </div>
  );
}

const WithSuspense = ({ id }: { id: number }) => {
  return (
    <Suspense fallback={<ProudctsLoading />}>
      {/* @ts-expect-error Server Component */}
      <FooterPage activePage={id} />
      {/* @ts-expect-error Server Component */}
      <ProudctResults id={id} />
    </Suspense>
  );
};

const WithoutSuspense = ({ id }: { id: number }) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <FooterPage activePage={id} />
      {/* @ts-expect-error Server Component */}
      <ProudctResults id={id} />
    </>
  );
};
