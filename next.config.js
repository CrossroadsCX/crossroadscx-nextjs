const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  // `next dev` and `next build` get separate output dirs, so a build never breaks a running dev server
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  async redirects() {
    return [
      {
        source: '/infographic',
        destination: '/',
        permanent: false,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
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
})

module.exports = nextConfig
