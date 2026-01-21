import type { TBlock } from '@okam/directus-block'
import type { AnyExtension, Extensions, JSONContent } from '@tiptap/core'
import type { ElementType, FunctionComponent, ReactNode } from 'react'

// Import custom Tiptap type extensions
import '../tiptap.d'

export type { Extensions, JSONContent }

export type RenderedNode<T> = T | string | (T | string)[]

export type Tag = ElementType
export type Attrs = JSONContent['attrs']
export type NodeType = 'mark' | 'node'

export type RenderCallback<T> = (_tag: Tag, _attrs: Attrs, _content?: T) => RenderedNode<T>

export type SerializedNode = [tag?: Tag, attrs?: Attrs]

/**
 * Custom serializer config type that includes the custom `render` property
 * added via module augmentation in tiptap.d.ts
 */
export interface SerializerConfig {
  options?: unknown
  renderHTML?: (_attributes: Record<string, unknown>) => SerializedNode
  render?: (_props: TBlock['item']) => ReactNode
  addAttributes?: () => Record<string, { rendered?: boolean, default?: unknown }>
}

export type Serializer = AnyExtension & {
  config: SerializerConfig
}

export type ComponentSerializers<T> = {
  name: string
  component?: T
  render?: (_attrs: Attrs) => [Tag | T, Attrs]
  type?: NodeType
}[]

export type RelationBlockSerializers<T> = {
  collection: string
  component: T
}[]

export type ReactComponentSerializers = ComponentSerializers<FunctionComponent>
export type ReactRelationBlockSerializers = RelationBlockSerializers<ReactNode>
export type EditorNodes = Record<string, unknown> | null
