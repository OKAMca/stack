import type { ReactNode } from 'react'
import type {
  Attrs,
  Extensions,
  JSONContent,
  NodeType,
  RenderCallback,
  RenderedNode,
  SerializedNode,
  Serializer,
  SerializerConfig,
} from './types'

function getSerializer(name: JSONContent['type'], type: NodeType, serializers: Extensions): SerializerConfig | undefined {
  const serializer = serializers.find(item => item.type === type && item.name === name) as Serializer | undefined
  if (!serializer)
    return undefined

  return {
    ...serializer.config,
    options: serializer.options,
  }
}

function getHTMLAttributes(attrs: Attrs, serializer: SerializerConfig) {
  const serializerAttrs = serializer.addAttributes?.()
  if (!serializerAttrs || !attrs)
    return attrs

  return Object.fromEntries(Object.entries(attrs).filter(([key]) => serializerAttrs[key]?.rendered !== false))
}

function serializeNode(node: JSONContent, serializers: Extensions, type: NodeType = 'node'): SerializedNode | ReactNode {
  const serializer = getSerializer(node.type, type, serializers)
  if (!serializer?.renderHTML)
    return []
  const htmlAttributes = getHTMLAttributes(node.attrs, serializer)
  if (serializer.render) {
    return serializer.render(node)
  }

  return serializer.renderHTML({
    node,
    HTMLAttributes: htmlAttributes,
  })
}

function render<T>(
  node: JSONContent,
  serializers: Extensions,
  renderCallback: RenderCallback<ReactNode | JSONContent[]>,
): RenderedNode<T> | ReactNode {
  if (node?.content) {
    node.content = node.content.map(async item => render<T>(item, serializers, renderCallback)) as JSONContent[]
  }

  if (node.type === 'text') {
    if (node.marks) {
      /**
       * WHY `any` IS REQUIRED FOR _node:
       *
       * This variable holds intermediate render results that can be one of:
       * 1. undefined (initial state)
       * 2. RenderedNode<T> = T | string | (T | string)[] (from renderCallback)
       * 3. JSONContent[] (from array assignment when serializedNode is not an array)
       *
       * The value transitions between these completely different shapes during
       * the forEach loop as marks are processed. The final return type depends
       * on which code path executed last.
       *
       * A proper union type like `RenderedNode<T> | JSONContent[] | undefined`
       * doesn't work because:
       * - renderCallback expects `_node || node.text` as content (string | RenderedNode<T>)
       * - TypeScript cannot narrow the type correctly within the forEach callback
       * - The intermediate state must be assignable from both branches
       */
      // eslint-disable-next-line ts/no-explicit-any -- See JSDoc above: _node transitions between incompatible types
      let _node: any
      node.marks.reverse().forEach((mark) => {
        const serializedNode = serializeNode(
          { ...mark, attrs: { ...mark.attrs, data: { ...mark?.attrs?.data, markText: node.text } } },
          serializers,
          'mark',
        ) as SerializedNode
        if (Array.isArray(serializedNode)) {
          const [tag = 'span', attrs = mark.attrs] = serializedNode
          const mappedAttrs = { ...attrs, data: undefined }
          _node = renderCallback(tag, mappedAttrs, _node ?? node.text)
        }
        else {
          const objectSerializedNode = serializedNode as JSONContent
          _node = [{ ...objectSerializedNode, text: node.text }]
        }
      })
      return _node
    }

    return node.text ?? ''
  }

  const serializer = getSerializer(node.type, 'node', serializers)

  if (serializer?.render) {
    return serializeNode(node, serializers) as ReactNode
  }

  const [tag = 'div', attrs = node.attrs] = serializeNode(node, serializers) as SerializedNode

  return renderCallback(tag, attrs, node.content) as RenderedNode<T>
}

function renderView<T>(
  node: JSONContent,
  serializers: Extensions,
  renderCallback: RenderCallback<ReactNode | JSONContent[]>,
): RenderedNode<T> {
  return render<T>(node, serializers, renderCallback) as RenderedNode<T>
}

export default renderView
