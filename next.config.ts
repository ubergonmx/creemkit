import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      // Add allowed image domains here, e.g.:
      // { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  allowedDevOrigins: [
    // Add ngrok or other development origins here, e.g.:
    // 'random-id.ngrok-free.dev',
    'reasoningly-ecesic-saylor.ngrok-free.dev',
  ],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
