const requiredServerEnvs = [
  "CMS_API",
  "IMAGE_API",
  "PUB_SUB_NAME",
  "PUB_SUB_TOPIC",
] as const;

type RequiredServerEnvKeys = (typeof requiredServerEnvs)[number];

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Record<RequiredServerEnvKeys, string> {}
  }
}

export {};
