/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/personal-page",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

