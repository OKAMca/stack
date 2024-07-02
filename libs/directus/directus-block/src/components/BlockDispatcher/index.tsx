import type { Nullable } from '@okam/stack-ui'
import { mergeConfigs } from '../../utils'
import BlockSerializer from '../BlockSerializer'
import type { TBlockSerializerProps } from '../BlockSerializer/interface'
import baseConfig from './config'
import type { TBlockDispatcherProps } from './interface'

const BlockDispatcher = (props: TBlockDispatcherProps) => {
  const { children, config, ...rest } = props

  const finalConfig = mergeConfigs(baseConfig, config)

  const renderBlock = (blockProps: Nullable<TBlockSerializerProps>) => {
    return children ? (
      children({ ...rest, ...blockProps, config: finalConfig })
    ) : (
      <BlockSerializer {...rest} {...blockProps} config={finalConfig} />
    )
  }

  if ('blocks' in props) {
    const { blocks } = props
    return blocks.map(renderBlock)
  }

  const { block } = props
  return renderBlock(block)
}

export default BlockDispatcher
