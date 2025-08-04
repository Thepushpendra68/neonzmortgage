/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neonmortgage.com',
      },
    ],
  },
};

export default nextConfig;
