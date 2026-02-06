import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
