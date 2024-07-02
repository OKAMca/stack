import type { TBlock } from '@okam/directus-block'
import type { JSONContent, Extensions, AnyExtension } from '@tiptap/core'
import type { ElementType, FunctionComponent, ReactNode } from 'react'

export type { JSONContent, Extensions }

export type RenderedNode<T> = T | string | (T | string)[]

export type Tag = ElementType
export type Attrs = JSONContent['attrs']
export type NodeType = 'mark' | 'node'

export type RenderCallback<T> = (tag: Tag, attrs: Attrs, content?: T) => RenderedNode<T>

export type SerializedNode = [tag?: Tag, attrs?: Attrs]
export type Serializer = AnyExtension & {
  options?: unknown
  renderHTML?: (attributes: Record<string, unknown>) => SerializedNode
  render?: (props: TBlock['item']) => ReactNode
  addAttributes: () => unknown
}

export type ComponentSerializers<T> = {
  name: string
  component?: T
  render?: (attrs: Attrs) => [Tag | T, Attrs]
  type?: NodeType
}[]

export type RelationBlockSerializers<T> = {
  collection: string
  component: T
}[]

export type ReactComponentSerializers = ComponentSerializers<FunctionComponent>
export type ReactRelationBlockSerializers = RelationBlockSerializers<ReactNode>
