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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

