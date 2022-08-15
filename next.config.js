/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["images.unsplash.com", "www.sanity.io", "e7.pngegg.com", "w7.pngwing.com"],
  },
  nextConfig,
};
