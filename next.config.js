/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["images.unsplash.com", "www.sanity.io", "e7.pngegg.com", "w7.pngwing.com", "image.tmdb.org"],
  },
  nextConfig,
  env: {
    NEXT_TMDB_KEY: process.env.NEXT_TMDB_KEY,
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
    NEXT_NEXT_IMG_URL: process.env.NEXT_IMG_URL,
  },
};
