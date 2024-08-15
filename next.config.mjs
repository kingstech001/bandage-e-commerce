/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/checkout/:path*',
          destination: '/checkout/:path*',
        },
      ];
    },
  
    async headers() {
      return [
        {
          source: '/checkout/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  