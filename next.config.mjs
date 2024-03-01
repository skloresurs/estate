import './src/env.mjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.skloresurs.com',
      },
    ],
  },
};

export default nextConfig;
