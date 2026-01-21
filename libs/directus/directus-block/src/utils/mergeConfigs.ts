import type { Nullable } from '@okam/stack-ui'
import type { TBlockSerializerConfig } from '../components/BlockSerializer/interface'

/**
 * Merges multiple block dispatcher configs
 * @param baseConfig The base configuration. Other configurations will be prioritized over this one, which acts as a fallback
 * @param configs Array of block dispatcher serializers to merge. Later elements will always be prioritized over first elements
 * @returns Merged config
 */
export default function mergeConfigs(
  baseConfig: TBlockSerializerConfig,
  ...configs: Nullable<TBlockSerializerConfig>[]
): TBlockSerializerConfig {
  const finalConfig = configs.reduce<TBlockSerializerConfig>((mergedConfig, config) => {
    if (config == null)
      return mergedConfig

    return { components: { ...mergedConfig.components, ...config.components } }
  }, baseConfig)

  return finalConfig
}
