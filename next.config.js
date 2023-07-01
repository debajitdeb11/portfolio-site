/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.licdn.com', 'cdn.sanity.io'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
