import { BlockSettingsFragmentDoc } from '../../generated/graphql'
import { getFragment } from '../../utils'
import type { TBlockSerializerProps } from './interface'

const BlockSerializer = (props: TBlockSerializerProps) => {
  const { item, collection, config, variables, defaultVariant, ...rest } = props

  if (!collection || !item || !config) return null

  const blockConfig = config?.components?.[collection]

  if (!blockConfig) return null

  const { id, settings } = item

  const { variant } = getFragment(BlockSettingsFragmentDoc, settings) ?? {}

  const variantWithFallback = blockConfig.getVariant?.(props) ?? variant ?? defaultVariant

  const defaultBlockComponent = blockConfig.default
  const variantBlockComponent = blockConfig.variants?.[variantWithFallback ?? '']
  const BlockComponent = variantBlockComponent ?? defaultBlockComponent

  if (!BlockComponent) return null

  return (
    <BlockComponent
      key={id}
      config={config}
      collection={collection}
      item={item}
      variables={{ id, ...variables }}
      {...rest}
    />
  )
}

export default BlockSerializer
