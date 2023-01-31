import FooterPage from "@features/shop/footer-page";
import { ProudctResults } from "@features/shop/product-results";

export const revalidate = 0;

export default function Shop({ params }: any) {
  return (
    <div className="grid lg:grid-cols-4 my-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ">
      <FooterPage activePage={params.id} />
      <ProudctResults id={params.id} />
      {/* <Suspense fallback={<ProudctsLoading />}>
        <FooterPage activePage={params.id} />
        <ProudctResults id={params.id} />
      </Suspense> */}
    </div>
  );
}
