import { RefreshPage } from "@/components/refresh-page";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RefreshPage />
      {children}
    </>
  );
}
