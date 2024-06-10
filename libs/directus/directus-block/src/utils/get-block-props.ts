/* eslint-disable @typescript-eslint/naming-convention */
import { queryGql } from '@okam/directus-query'
import type { Nullable } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import type { TBlockDocument, TBlockQuery, TBlockVariables, TCommonBlockFragment } from '../types/block'

type TGetBlockPropsParams<BlockFragment extends TCommonBlockFragment, BlockVariables extends Variables = Variables> = {
  document?: TBlockDocument<BlockFragment, BlockVariables>
  item?: Nullable<NonNullable<NonNullable<TBlockQuery<BlockFragment>[string]>[' $fragmentRefs']>[string]>
  blockKey?: string
  variables?: TBlockVariables<BlockVariables>
}

function isVariables<BlockVariables extends Variables>(
  maybeVariables: Nullable<Variables>,
): maybeVariables is BlockVariables {
  return !!maybeVariables
}

/**
 * Returns the passed item if it is defined. Otherwise, queried its own block
 * @param params.blockKey Key of the queried field
 * @param params.item Item of the block. If null, the function will make a query
 * @returns The block data
 */
export default async function getBlockProps<
  BlockFragment extends TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
>(params: TGetBlockPropsParams<BlockFragment, BlockVariables>): Promise<BlockFragment | null | undefined> {
  const { document, item, blockKey, variables } = params

  if (item) return item

  if (!document || !isVariables<BlockVariables>(variables)) return null

  const queriedBlockProps = await queryGql(document, variables)

  if (!queriedBlockProps || typeof queriedBlockProps !== 'object' || !blockKey) return null

  const queriedBlockFragment = queriedBlockProps[blockKey]

  return queriedBlockFragment as BlockFragment
}
