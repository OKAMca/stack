import type { TBlockSerializerConfig } from '@okam/directus-block'
import { BlockDispatcher } from '@okam/directus-block/server'
import type { TDefaultComponent } from '@okam/stack-ui'
import { Node } from '@tiptap/core'
import { injectDataIntoContent } from '../../functions'
import type { JSONContent, Extensions, EditorNodes } from '../../functions/types'
import type { RelationBlockProps } from '../../types'
import type { TRenderingNodes } from '../nodes/types'
import RenderNodes from '../RenderNodes'
import extensions from './extensions'

interface FlexibleEditorContentProps extends TDefaultComponent {
  jsonContent: JSONContent
  editorNodes?: EditorNodes[] | undefined | null
  serializers?: Extensions
  config?: TBlockSerializerConfig
  nodes?: TRenderingNodes
  remappedAttributes?: Record<string, string>
}

const FlexibleEditorContent = (props: FlexibleEditorContentProps) => {
  const { jsonContent, editorNodes, serializers, nodes, config, themeName, tokens, customTheme, remappedAttributes } =
    props

  const content = injectDataIntoContent(editorNodes, jsonContent)

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

  effectiveSerializers.push(relationBlockSerializer)

  if (!content) {
    return null
  }

  return (
    <RenderNodes
      content={content}
      serializers={effectiveSerializers}
      renderingNodes={nodes}
      themeName={themeName}
      tokens={tokens}
      customTheme={customTheme}
      remappedAttributes={remappedAttributes}
    />
  )
}

export default FlexibleEditorContent
