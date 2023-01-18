const requiredServerEnvs = [
  "CMS_API",
  "SHOP_API",
  "NEXTAUTH_URL",
  "NEXTAUTH_SECRET",
] as const;

type RequiredServerEnvKeys = typeof requiredServerEnvs[number];

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Record<RequiredServerEnvKeys, string> {}
  }
}

export {};
