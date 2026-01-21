import type { NextConfig } from 'next'

interface CustomPluginOptions {
  [key: string]: string
}

function withDirectus(nextConfig: NextConfig = {}, pluginOptions: CustomPluginOptions = {}): NextConfig {
  // Create a new object for the combined environment variables
  const combinedEnv = {
    ...nextConfig.env,
    ...pluginOptions,
  }

  return {
    ...nextConfig,
    env: combinedEnv,
  }
}

export default withDirectus
