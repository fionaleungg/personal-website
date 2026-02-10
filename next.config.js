/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Required for images to work on Netlify (no server-side image optimization)
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
