import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.nvidia.partners' },
      { protocol: 'https', hostname: 'external-content.duckduckgo.com' },
      { protocol: 'https', hostname: 'cdn.mos.cms.futurecdn.net' },
    ],
  },
};

export default nextConfig;
