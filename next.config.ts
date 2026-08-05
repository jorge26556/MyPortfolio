import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // A static export has no server to resize or re-encode on request, so every
    // file under public/ is delivered byte-for-byte as committed. Assets are
    // pre-converted to WebP instead — see `npm run optimize:images`.
    unoptimized: true,
  },
};

export default nextConfig;
