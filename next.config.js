/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "cdn.jsdelivr.net", "res.cloudinary.com"],
  },
  output: "standalone",
};

module.exports = nextConfig
