/** @type {import('next').NextConfig} */

const withVideos = require("next-videos");

const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        prependData: `@import "~@styles/vars.scss";`,
    },
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: [
            "@react-email/components",
            "@react-email/render",
            "@react-email/html",
        ],
    },
    transpilePackages: ["@react-email/components", "@react-email/render", "@react-email/html"],
};

module.exports = withVideos(nextConfig);
