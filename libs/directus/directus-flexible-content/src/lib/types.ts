import type { TCommonBlockFragment } from '@okam/directus-block'

export type RelationBlockSerializers<T> = {
  collection: string
  component: T
}[]
export type RelationBlockProps = RelationBlockAttrs & {
  type: string
  attrs: RelationBlockAttrs & { data: { blocks: TCommonBlockFragment[] } }
}

export interface RelationBlockAttrs {
  id: string | null
  junction: string | null
  collection: string | null
}
