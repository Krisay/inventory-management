import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3mikenyo.s3.us-east-2.amazonaws.com/",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
