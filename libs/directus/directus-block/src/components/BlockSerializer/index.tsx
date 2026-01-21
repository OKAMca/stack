import type { TBlockSerializerProps } from './interface'
import { BlockSettingsFragmentDoc } from '../../generated/graphql'
import { getFragment } from '../../utils'

function BlockSerializer(props: TBlockSerializerProps) {
  const { item, collection, config, variables, defaultVariant, ...rest } = props

  if ((collection == null || collection === '') || config == null)
    return null

  const blockConfig = config?.components?.[collection]

  if (blockConfig == null)
    return null

  const { settings } = item ?? {}
  const id = item?.id ?? variables?.id

  if (id == null || id === '')
    return null

  const { variant } = getFragment(BlockSettingsFragmentDoc, settings) ?? {}

  const variantWithFallback = blockConfig.getVariant?.(props) ?? variant ?? defaultVariant

  const { default: defaultBlockComponent, document } = blockConfig

  const variantBlockComponent = blockConfig.variants?.[variantWithFallback ?? '']
  const BlockComponent = variantBlockComponent ?? defaultBlockComponent

  if (BlockComponent == null)
    return null

  return (
    <BlockComponent
      key={id}
      document={document}
      config={config}
      collection={collection}
      item={item}
      {...(id ? { variables: { ...variables, id } } : { variables })}
      {...rest}
    />
  )
}

export default BlockSerializer
