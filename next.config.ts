import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: false },
      { source: "/contact", destination: "/", permanent: false },
      { source: "/work", destination: "/", permanent: false },
      { source: "/services", destination: "/", permanent: false },
      { source: "/services/:path*", destination: "/", permanent: false },
      { source: "/who-we-serve", destination: "/", permanent: false },
      { source: "/who-we-serve/:path*", destination: "/", permanent: false },
      { source: "/insights", destination: "/", permanent: false },
      { source: "/insights/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
