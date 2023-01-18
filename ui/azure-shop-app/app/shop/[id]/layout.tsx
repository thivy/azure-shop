import FooterPage from "@features/shop/footer-page";

export default function ShopLayout({ children, params }: any) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <FooterPage activePage={params.id} />
      {children}
    </>
  );
}
