"use client";

import { ShopProvider } from "@features/shop/shop-context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ShopProvider>{children}</ShopProvider>
    </>
  );
};
