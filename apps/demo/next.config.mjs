// @ts-check

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { composePlugins, withNx } from '@nx/next'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: process.env.NEXT_PUBLIC_IMG_DOMAIN ?? '' }],
  },
  // Set outputFileTracingRoot to monorepo root for proper file tracing in NX monorepo
  // This resolves the warning about multiple lockfiles preventing workspace root inference
  outputFileTracingRoot: join(__dirname, '../../'),
  nx: {},
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
]

export default composePlugins(...plugins)(nextConfig)
