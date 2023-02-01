const requiredServerEnvs = ["CMS_API", "IMAGE_API"] as const;

type RequiredServerEnvKeys = typeof requiredServerEnvs[number];

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Record<RequiredServerEnvKeys, string> {}
  }
}

export {};
