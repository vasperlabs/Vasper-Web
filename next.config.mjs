/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Vasper-Web",
  assetPrefix: "/Vasper-Web/",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
