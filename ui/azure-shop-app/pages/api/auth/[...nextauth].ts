import NextAuth, { NextAuthOptions, Session } from "next-auth";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

interface Owe extends Session {
  some: string;
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: { strategy: "jwt" },
  secret: "TEMP",
  providers: [
    AzureADB2CProvider({
      tenantId: "thivy2023",
      clientId: "8fcb0e09-c7fe-4f24-885f-b5407d3e6cec",
      clientSecret: "UvV8Q~wnvmO3l~PZm.Y1nxakSbSdge5NfbLmLnc0i",
      primaryUserFlow: "B2C_1_signup_signin",
      authorization: { params: { scope: "offline_access openid" } },
      checks: ["pkce"],
      profile(profile, tokens) {
        return {
          id: profile.sub,
          name: profile.given_name,
        };
      },
      client: {
        token_endpoint_auth_method: "none",
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // console.log("session", session);
      // console.log("token", token);
      // console.log("user", user);
      // @ts-ignore
      const tt: Owe = { ...session, some: "WEWEWE" };
      return tt;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // @ts-ignore
      user.somethis = "value";
      // console.log("email", profile);

      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
};
export default NextAuth(authOptions);
