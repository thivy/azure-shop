import { HeadingSection } from "@components/section/section";

export default function ShopLayout({ params, children }: any) {
  return (
    <>
      <HeadingSection>
        <h3 className="display-3 col-span-4">Order details</h3>
      </HeadingSection>

      {children}
    </>
  );
}
