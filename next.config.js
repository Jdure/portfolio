/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "via.placeholder.com",
      "res.cloudinary.com",
    ],
  },
  output: "standalone",
};

module.exports = nextConfig
