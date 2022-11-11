/** @type {import('next').NextConfig} */

const nextPWA = require('next-pwa')

const runtimeCaching = require('./next-pwa.cache')

const withPWA = nextPWA({
  mode: 'production',
  dest: 'public',
  disable: false,
  runtimeCaching,
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname:
          '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.statically.io',
        port: '',
        pathname:
          '/gh/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
      },
    ],
  },
}

module.exports = withPWA(nextConfig)
