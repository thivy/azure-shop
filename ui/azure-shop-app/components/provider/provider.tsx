"use client";

import { SessionProvider } from "next-auth/react";

export const Providers = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return (
    <>
      <SessionProvider session={session}>
        {/* <button onClick={() => signIn()}>sing</button> */}

        {children}
      </SessionProvider>
    </>
  );
};
