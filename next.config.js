/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
      {
        source: "/about",
        destination: "/pages/aboutUs",
      },
      {
        source: "/quotation",
        destination: "/pages/quotation",
      },
      {
        source: "/portfolio",
        destination: "/pages/portfolio",
      },
      {
        source: "/contact",
        destination: "/pages/contact",
      },
    ];
  },
};

module.exports = nextConfig;
