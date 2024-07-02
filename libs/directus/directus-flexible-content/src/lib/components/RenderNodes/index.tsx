'use server'

import { Box } from '@okam/stack-ui'
import type { ElementType, FunctionComponent, ReactNode } from 'react'
import { renderView, mergeSerializers } from '../../functions'

import type { JSONContent, Extensions, ReactComponentSerializers } from '../../functions/types'

interface RenderNodesProps {
  content: JSONContent
  serializers?: Extensions
  componentSerializers?: ReactComponentSerializers
}

const RenderNodes: FunctionComponent<RenderNodesProps> = ({ content, serializers = [], componentSerializers = [] }) => {
  // Clone the content to avoid mutating the original prop
  const clonedContent = JSON.parse(JSON.stringify(content))

  // Merge serializers with componentSerializers
  const mergedSerializers = mergeSerializers(serializers, componentSerializers)

  // renderView should be a function that knows how to render the content
  // using React components instead of Vue's render function.
  // This is a placeholder function and should be implemented according to your needs.
  return renderView(
    clonedContent,
    mergedSerializers,
    // @ts-expect-error Expects ReactNode
    (tag: ElementType, attrs: JSONContent['attrs'], children: ReactNode) => {
      const attributes = { ...attrs, style: {} }
      return (
        <Box as={tag} {...attributes}>
          {children}
        </Box>
      )
    },
  )
}

export default RenderNodes
