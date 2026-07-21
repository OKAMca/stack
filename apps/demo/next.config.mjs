// @ts-check

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { composePlugins, withNx } from '@nx/next'

const __dirname = dirname(fileURLToPath(import.meta.url))

const protocol = /** @type {('http' | 'https')} */ (process.env.NEXT_PUBLIC_IMG_PROTOCOL) ?? 'http'

/**
 * @type {import('next/dist/shared/lib/image-config').RemotePattern}
 */
const pattern = { protocol, hostname: process.env.NEXT_PUBLIC_IMG_DOMAIN ?? 'localhost', port: process.env.NEXT_PUBLIC_IMG_PORT ?? '8055' }

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 */
const nextConfig = {
  images: {
    remotePatterns: [pattern],
    loader: 'custom',
    loaderFile: './image-loader.ts',
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
