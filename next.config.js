/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "~@styles/vars.scss";`,
  },
};

module.exports = withVideos(nextConfig);
