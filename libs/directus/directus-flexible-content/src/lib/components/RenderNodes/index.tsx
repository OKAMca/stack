import type { TDefaultComponent } from '@okam/stack-ui'
import { Box } from '@okam/stack-ui'
import React, { type ReactNode } from 'react'
import { renderView, mergeSerializers } from '../../functions'

import type { JSONContent, Extensions, ReactComponentSerializers } from '../../functions/types'
import remapAttributes from '../attributes/remapAttributes'
import nodes from '../nodes'
import type { TRenderingNodes } from '../nodes/types'

interface RenderNodesProps extends TDefaultComponent {
  content: JSONContent
  serializers?: Extensions
  componentSerializers?: ReactComponentSerializers
  renderingNodes?: TRenderingNodes
  remappedAttributes?: Record<string, string>
}

const RenderNodes = (props: RenderNodesProps): ReactNode => {
  const {
    content,
    serializers = [],
    componentSerializers = [],
    renderingNodes,
    remappedAttributes,
    themeName,
    tokens,
    customTheme,
  } = props

  const clonedContent = JSON.parse(JSON.stringify(content))

  const mergedSerializers = mergeSerializers(serializers, componentSerializers)

  return renderView(
    clonedContent,
    mergedSerializers,
    // @ts-expect-error Expects ReactNode
    (tag: keyof React.JSX.IntrinsicElements, attrs: JSONContent['attrs'], children: ReactNode) => {
      const defaultAttributes = {
        ...attrs,
        style: undefined,
      }
      const mappedAttributes = remapAttributes(remappedAttributes, defaultAttributes)

      const tagKey = tag as keyof TRenderingNodes
      const renderingNode = renderingNodes?.[tagKey] ?? nodes?.[tagKey]

      if (renderingNode) {
        return renderingNode({ children, attrs: mappedAttributes, themeName, tokens, customTheme })
      }

      return (
        <Box
          key={JSON.stringify(children)}
          as={tag as React.ElementType}
          {...mappedAttributes}
          themeName={themeName}
          tokens={tokens}
          customTheme={customTheme}
        >
          {children}
        </Box>
      )
    },
  )
}

export default RenderNodes
