/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["davefarmiloe.com", "localhost", "localhost:3000"],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
