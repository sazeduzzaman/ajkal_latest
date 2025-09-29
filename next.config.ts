import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "control.ajkal.us",
        pathname: "/**", // allow all images from this domain
      },
      {
        protocol: "https",
        hostname: "ajkal.us",
        pathname: "/**", // allow all images from this domain
      },
    ],
  },
  staticPageGenerationTimeout: 120, // ⬅️ increase build timeout to 120s
};

export default nextConfig;
