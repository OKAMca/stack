'use server'

import type { ReactNode } from 'react'
import type {
  JSONContent,
  Extensions,
  RenderedNode,
  Attrs,
  NodeType,
  RenderCallback,
  SerializedNode,
  Serializer,
} from './types'

const getSerializer = (
  name: JSONContent['type'],
  type: NodeType,
  serializers: Extensions,
): Serializer['config'] | undefined => {
  const serializer = serializers.find((item) => item.type === type && item.name === name)

  if (!serializer) return undefined

  return {
    ...serializer.config,
    options: serializer.options,
  }
}

const getHTMLAttributes = (attrs: Attrs, serializer: Serializer['config']) => {
  const serializerAttrs = serializer.addAttributes?.()
  if (!serializerAttrs || !attrs) return attrs

  return Object.fromEntries(Object.entries(attrs).filter(([key]) => serializerAttrs[key]?.rendered !== false))
}

const serializeNode = (
  node: JSONContent,
  serializers: Extensions,
  type: NodeType = 'node',
): SerializedNode | ReactNode => {
  const serializer = getSerializer(node.type, type, serializers)
  if (!serializer?.renderHTML) return []

  const htmlAttributes = getHTMLAttributes(node.attrs, serializer)
  if (serializer.render) {
    return serializer.render(node)
  }

  return serializer.renderHTML({
    node,
    HTMLAttributes: htmlAttributes,
  })
}

const render = <T>(
  node: JSONContent,
  serializers: Extensions,
  renderCallback: RenderCallback<ReactNode | JSONContent[]>,
): RenderedNode<T> | ReactNode => {
  if (node?.content) {
    // eslint-disable-next-line no-param-reassign
    node.content = node.content.map((item) => render<T>(item, serializers, renderCallback)) as JSONContent[]
  }

  if (node.type === 'text') {
    if (node.marks) {
      // eslint-disable-next-line
      let _node: any

      node.marks.reverse().forEach((mark) => {
        const [tag = 'span', attrs = mark.attrs] = serializeNode(mark, serializers, 'mark') as SerializedNode

        _node = renderCallback(tag, attrs, _node || node.text)
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

const renderView = <T>(
  node: JSONContent,
  serializers: Extensions,
  renderCallback: RenderCallback<ReactNode | JSONContent[]>,
): RenderedNode<T> => {
  return render<T>(node, serializers, renderCallback) as RenderedNode<T>
}

export default renderView
