/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Disable image optimization for Netlify compatibility
  images: {
    unoptimized: true,

    // Optional: You can still leave remotePatterns in case you move to Vercel or use <img />
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    domains: ["localhost"], // kept for local dev
  },
};

module.exports = nextConfig;
