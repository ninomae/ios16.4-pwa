/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/ios16.4-pwa/' : '',
  images: {
    unoptimized: true,
  },
}
