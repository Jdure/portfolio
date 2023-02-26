/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "cdn.jsdelivr.net", "res.cloudinary.com"],
  },
  i18n: {
    locales: ["en-CA", "fr-CA"],
    defaultLocale: "en-CA",
  },
  output: "standalone",
};

module.exports = nextConfig
