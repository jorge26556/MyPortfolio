import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages
  basePath: isProd ? '/MyPortfolio' : '', // Set base path for GitHub Pages
  images: {
    unoptimized: true, // Static export doesn't support built-in image optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [25, 50, 75, 90, 100],
  },
};

export default nextConfig;
