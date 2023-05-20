/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@nextui-org/react", "@nextui-org/theme"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.PAYLOAD_ENDPOINT}/api/:path*`,
      },
      {
        source: "/admin/:path*",
        destination: `${process.env.PAYLOAD_ENDPOINT}/admin/:path*`,
      },
      {
        source: "/media/:path*",
        destination: `${process.env.PAYLOAD_ENDPOINT}/media/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
