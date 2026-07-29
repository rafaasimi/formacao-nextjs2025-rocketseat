import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'github.com',
    },
    {
      protocol: 'https',
      hostname: 'picsum.photos',
    }]
  }
};

export default withContentlayer(nextConfig);
