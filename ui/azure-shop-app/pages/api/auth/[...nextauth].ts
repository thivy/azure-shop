import NextAuth, { NextAuthOptions } from "next-auth";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";
export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  // Configure one or more authentication providers
  providers: [
    AzureADB2CProvider({
      tenantId: "thivy2023",
      clientId: "8fcb0e09-c7fe-4f24-885f-b5407d3e6cec",
      clientSecret: "UvV8Q~wnvmO3l~PZm.Y1nxakSbSdge5NfbLmLnc0i",
      primaryUserFlow: "B2C_1_signup_signin",
      authorization: {
        params: {
          scope: "8fcb0e09-c7fe-4f24-885f-b5407d3e6cec offline_access",
        },
      },
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
