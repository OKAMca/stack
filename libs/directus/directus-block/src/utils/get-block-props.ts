/* eslint-disable @typescript-eslint/naming-convention */
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { queryGql } from '@okam/directus-query'
import type { Nullable } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import type { TCommonBlockFragment } from '../types/block'

type TBlockQuery<BlockFragment extends TCommonBlockFragment> = {
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

type TGetBlockPropsParams<BlockFragment extends TCommonBlockFragment, BlockVariables extends Variables = Variables> = {
  document?: TypedDocumentNode<TBlockQuery<BlockFragment>, Partial<BlockVariables>>
  item?: Nullable<NonNullable<NonNullable<TBlockQuery<BlockFragment>[string]>[' $fragmentRefs']>[string]>
  blockKey?: string
  variables?: Partial<BlockVariables>
}

export default async function getBlockProps<
  BlockFragment extends TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
>(params: TGetBlockPropsParams<BlockFragment, BlockVariables>): Promise<BlockFragment | null | undefined> {
  const { document, item, blockKey, variables } = params

  if (item) return item

  if (!document) return null

  const queriedBlockProps = await queryGql(document, variables)

  if (!queriedBlockProps || typeof queriedBlockProps !== 'object' || !blockKey) return null

  const queriedBlockFragment = queriedBlockProps[blockKey]

  return queriedBlockFragment as BlockFragment
}
