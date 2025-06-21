import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/button-component",
  images: { unoptimized: true }
};

export default nextConfig;
