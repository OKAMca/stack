import type { TBlockSerializerConfig } from '@okam/directus-block'
import { BlockDispatcher } from '@okam/directus-block/server'
import type { TDefaultComponent } from '@okam/stack-ui'
import { Mark, Node } from '@tiptap/core'
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
  relationMarksConfig?: TBlockSerializerConfig
  nodes?: TRenderingNodes
  remappedAttributes?: Record<string, string>
}

const FlexibleEditorContent = (props: FlexibleEditorContentProps) => {
  const {
    jsonContent,
    editorNodes,
    serializers,
    nodes,
    config,
    relationMarksConfig,
    themeName,
    tokens,
    customTheme,
    remappedAttributes,
  } = props

  const content = injectDataIntoContent(editorNodes, jsonContent)
  // `.slice(0)` to clone the extensions array
  const effectiveSerializers = serializers ?? [...extensions] ?? []

  const renderRelationBlock = (block: RelationBlockProps, blockDispatcherConfig?: TBlockSerializerConfig) => {
    const { attrs } = block
    const blockKey = `${attrs?.collection?.replace('related_', '')}_id`
    if (attrs?.data) {
      if (!attrs?.data?.blocks) {
        const properBlock = { collection: attrs.collection, item: { ...attrs?.data } }
        return <BlockDispatcher key={JSON.stringify(properBlock)} block={properBlock} config={blockDispatcherConfig} />
      }
      const items = attrs?.data?.blocks
      const blocks = items?.map((item) => {
        const properItem = item?.[blockKey] as Record<string, unknown>
        return { item: properItem, collection: attrs?.collection }
      })
      return <BlockDispatcher key={JSON.stringify(items)} blocks={blocks} config={blockDispatcherConfig} />
    }
    return null
  }

  const relationBlockSerializer = Node.create({
    name: 'relation-block',
    renderHTML: () => ['relation-block'],
    render: (block: RelationBlockProps) => renderRelationBlock(block, config),
  })

  const relationInlineBlockSerializer = Node.create({
    name: 'relation-inline-block',
    renderHTML: () => ['relation-inline-block'],
    render: (block: RelationBlockProps) => renderRelationBlock(block, config),
  })

  const relationMarkSerializer = Mark.create({
    name: 'relation-mark',
    type: 'relation-mark',
    renderHTML: () => ['relation-mark'],
    render: (block: RelationBlockProps) => {
      return renderRelationBlock(block, relationMarksConfig)
    },
  })

  effectiveSerializers.push(relationBlockSerializer, relationInlineBlockSerializer, relationMarkSerializer)

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
