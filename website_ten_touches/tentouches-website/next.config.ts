import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/dist/**', '**/.next/**', '**/.git/**'],
        poll: false,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
