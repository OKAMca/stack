/* eslint-disable @typescript-eslint/naming-convention */
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { queryGql } from '@okam/directus-query'
import type { Nullable } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import type { TDefaultBlock } from '../types/block'

type TBlockQuery<BlockFragment extends TDefaultBlock> = {
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

type TGetBlockPropsParams<BlockFragment extends TDefaultBlock, TVariables extends Variables = Variables> = {
  document?: TypedDocumentNode<TBlockQuery<BlockFragment>, TVariables>
  item?: Nullable<NonNullable<NonNullable<TBlockQuery<BlockFragment>[string]>[' $fragmentRefs']>[string]>
  blockKey?: string
  variables?: Partial<TVariables>
}

export default async function getBlockProps<
  BlockFragment extends TDefaultBlock,
  TVariables extends Variables = Variables,
>(params: TGetBlockPropsParams<BlockFragment, TVariables>): Promise<BlockFragment | null | undefined> {
  const { document, item, blockKey, variables } = params

  if (item) return item

  if (!document) return null

  const queriedBlockProps = await queryGql(
    document,
    variables && (Object.fromEntries(Object.entries(variables).filter((variable) => !!variable[1])) as TVariables),
  )

  if (!queriedBlockProps || typeof queriedBlockProps !== 'object' || !blockKey) return null

  const queriedBlockFragment = queriedBlockProps[blockKey]

  return queriedBlockFragment as BlockFragment
}
