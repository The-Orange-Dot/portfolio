import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        hostname: "im-tom.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
