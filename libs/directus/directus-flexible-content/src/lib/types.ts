import type { JSONContent } from '@tiptap/core'

export type RelationBlockSerializers<T> = {
  collection: string
  component: T
}[]
export type RelationBlockProps = RelationBlockAttrs & {
  data?: JSONContent | null
}

export type RelationBlockAttrs = {
  id: string | null
  junction: string | null
  collection: string | null
}
