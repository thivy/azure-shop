"use client";

import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>
        {/* <button onClick={() => signIn("azure-ad-b2c")}>sing</button>
        <button onClick={() => signOut()}>signOut</button>
        <We /> */}
        {children}
      </SessionProvider>
    </>
  );
};
