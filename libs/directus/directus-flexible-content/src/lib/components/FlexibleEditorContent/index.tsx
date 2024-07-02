'use server'

import type { TBlockSerializerConfig } from '@okam/directus-block'
import { BlockDispatcher } from '@okam/directus-block'
import { Node } from '@tiptap/core'
import type { JSONContent, Extensions, ReactComponentSerializers } from '../../functions/types'
import type { RelationBlockProps } from '../../types'
import RenderNodes from '../RenderNodes'
import extensions from './extensions'

interface FlexibleEditorContentProps {
  content: JSONContent | null
  serializers?: Extensions
  componentSerializers?: ReactComponentSerializers
  config?: TBlockSerializerConfig
}

const FlexibleEditorContent = (props: FlexibleEditorContentProps) => {
  const { content, serializers, componentSerializers, config } = props

  // `.slice(0)` to clone the extensions array
  const effectiveSerializers = serializers ?? [...extensions] ?? []

  const relationBlockSerializer = Node.create({
    name: 'relation-block',
    renderHTML: () => ['relation-block'],
    render: (block: RelationBlockProps) => {
      const { attrs } = block
      if (attrs?.data) {
        if (!attrs?.data?.blocks) {
          const properBlock = { collection: attrs.collection, item: { ...block } }
          return <BlockDispatcher block={properBlock} config={config} />
        }
        const items = attrs?.data?.blocks
        const blocks = items?.map((item) => {
          return { ...item, collection: attrs?.collection }
        })
        return <BlockDispatcher blocks={blocks} config={config} />
      }
      return null
    },
  })

  const tableSerializer = Node.create({
    name: 'table',
    renderHTML: ({ HTMLAttributes }) => {
      const element = 'table'

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return [element, HTMLAttributes, 0] as any
    },
  })

  effectiveSerializers.push(relationBlockSerializer)
  effectiveSerializers.push(tableSerializer)

  if (!content) {
    return null
  }

  return (
    <RenderNodes content={content} serializers={effectiveSerializers} componentSerializers={componentSerializers} />
  )
}

export default FlexibleEditorContent
