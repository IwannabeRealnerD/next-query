/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx"],
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = nextConfig;
