import type { TDefaultComponent } from '@okam/stack-ui'
import type { ElementType, JSX, ReactNode } from 'react'
import type { Extensions, JSONContent, ReactComponentSerializers } from '../../functions/types'
import type { TRenderingNodes } from '../nodes/types'

import { Box } from '@okam/stack-ui'
import { mergeSerializers, renderView } from '../../functions'
import remapAttributes from '../attributes/remapAttributes'
import nodes from '../nodes'

interface RenderNodesProps extends TDefaultComponent {
  content: JSONContent
  serializers?: Extensions
  componentSerializers?: ReactComponentSerializers
  renderingNodes?: TRenderingNodes
  remappedAttributes?: Record<string, string>
}

function RenderNodes(props: RenderNodesProps): ReactNode {
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

  const clonedContent = JSON.parse(JSON.stringify(content)) as JSONContent

  const mergedSerializers = mergeSerializers(serializers, componentSerializers)

  return renderView(
    clonedContent,
    mergedSerializers,
    // @ts-expect-error Expects ReactNode
    (tag: keyof JSX.IntrinsicElements, attrs: JSONContent['attrs'], children: ReactNode) => {
      const defaultAttributes = {
        ...attrs,
        style: undefined,
      }
      const mappedAttributes = remapAttributes(remappedAttributes, defaultAttributes)

      const tagKey = tag
      const renderingNode = renderingNodes?.[tagKey] ?? nodes?.[tagKey]

      if (renderingNode != null) {
        return renderingNode({ children, attrs: mappedAttributes, themeName, tokens, customTheme })
      }

      return (
        <Box
          key={JSON.stringify(children)}
          as={tag as ElementType}
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
