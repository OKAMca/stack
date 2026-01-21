import type { DocumentTypeDecoration, TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Nullable } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import type { FragmentType } from '../generated/fragment-masking'
import type { BlockSettingsFragment } from '../generated/graphql'

export interface TAdditionalProps { [key: string]: unknown }

type BlockSettings = FragmentType<DocumentTypeDecoration<BlockSettingsFragment, unknown>>

export type TCommonBlockFragment = {
  id?: Nullable<string>
  settings?: Nullable<BlockSettings>
} & Record<string, unknown>

export type TBlockQuery<BlockFragment extends TCommonBlockFragment> = {
  __typename?: 'Query'
} & {
  [blockKey: string]:
    | {
      ' $fragmentRefs'?:
        | {
          [blockFragmentKey: string]: BlockFragment
        }
        | null
        | undefined
    }
    | null
    | undefined
}

export type TBlockVariables<BlockVariables extends Variables = Variables> = {
  id: string
} & BlockVariables

export type TBlockDocument<
  BlockFragment extends TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
> = TypedDocumentNode<TBlockQuery<BlockFragment>, TBlockVariables<BlockVariables>>
