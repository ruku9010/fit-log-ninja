import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // 1. Remote Image Domain Whitelisting
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        
      },
    ],
  }
};

export default nextConfig;
