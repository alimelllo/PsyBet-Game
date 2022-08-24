/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

module.exports = withFonts({
  enableSvg: true,
  reactStrictMode: true,
  webpack(config, options) {
    return config;
  },
});
