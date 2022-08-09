/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/infographic',
        destination: '/',
        permanent: false,
      },
      {
        source: '/koozies',
        destination: '/',
        permanent: false,
      }
    ];
  },
  experimental: {
    images: { allowFutureImage: true },
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
