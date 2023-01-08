/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "shop-products.icydesert-c122ef8e.australiaeast.azurecontainerapps.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
