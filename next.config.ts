import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */


const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
