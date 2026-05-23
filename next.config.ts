import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inamigosfoundation.org.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
