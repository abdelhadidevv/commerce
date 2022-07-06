/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  images: {
    domains: [
      "omar-tech-store.herokuapp.com",
      "image-us.samsung.com",
      "store.storeimages.cdn-apple.com",
      "fdn2.gsmarena.com",
      "oasis.opstatics.com",
      "htsg-store-gl.heytapimg.com",
      "i.pinimg.com",
      "m.media-amazon.com",
      "nordace.com",
      "images.samsung.com",
    ],
  },
};

module.exports = nextConfig;
