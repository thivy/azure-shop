"use client";

import { ShopProvider } from "@features/shop/shop-context";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <ShopProvider>
          {/* <button onClick={() => signIn("azure-ad-b2c")}>sing</button>
          <button onClick={() => signOut()}>signOut</button> */}
          {children}
        </ShopProvider>
      </SessionProvider>
    </>
  );
};
