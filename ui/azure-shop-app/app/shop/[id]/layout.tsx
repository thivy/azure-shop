import FooterPage from "../footer-page";

export default function ShopLayout({ children, params }: any) {
  return (
    <>
      {/* @ts-ignore*/}
      <FooterPage activePage={params.id} />
      {children}
    </>
  );
}
