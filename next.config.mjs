/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    output: 'export',
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/v0-realtor-website-redesign',
}

export default nextConfig
