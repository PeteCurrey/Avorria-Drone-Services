import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['gsap'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
