/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})
const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    return config;
  }
})

module.exports = nextConfig
