import type { Nullable } from '@okam/stack-ui'
import type { TBlockSerializerProps } from '../BlockSerializer/interface'
import type { TBlockDispatcherProps } from './interface'
import { mergeConfigs } from '../../utils'
import BlockSerializer from '../BlockSerializer'
import baseConfig from './config'

async function BlockDispatcher(props: TBlockDispatcherProps) {
  const { children, config, ...rest } = props

  const finalConfig = mergeConfigs(baseConfig, config)

  const renderBlock = async (blockProps: Nullable<TBlockSerializerProps>) => {
    return children != null
      ? (
          children({ ...rest, ...blockProps, config: finalConfig })
        )
      : (
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
