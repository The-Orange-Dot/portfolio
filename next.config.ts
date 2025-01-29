import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "192.168.86.32",
        port: "3000",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "qsg40ooowk044gsokgcww840.hung-le.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
