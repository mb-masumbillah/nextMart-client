import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */


const nextConfig : NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "psediting.websites.co.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

