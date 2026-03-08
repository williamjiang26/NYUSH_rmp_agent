/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shanghai.nyu.edu",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
