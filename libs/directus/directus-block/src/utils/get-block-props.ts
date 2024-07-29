'server-only'

import { queryGql } from '@okam/directus-query'
import type { Nullable } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import { isEmpty } from 'radash'
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

function isOnlyIdInItem(item: TCommonBlockFragment): item is TBlockVariables {
  return !isEmpty(item) && Object.keys(item).length === 1 && Object.keys(item)[0] === 'id' && !!item.id
}

async function queryFromVariables<
  BlockFragment extends TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
>(params: TGetBlockPropsParams<BlockFragment, BlockVariables>) {
  const { document, blockKey, variables } = params

  if (!document || !isVariables<BlockVariables>(variables)) return null

  const queriedBlockProps = await queryGql(document, variables)

  if (!queriedBlockProps || typeof queriedBlockProps !== 'object' || !blockKey) return null

  const queriedBlockFragment = queriedBlockProps[blockKey]

  return queriedBlockFragment as BlockFragment
}

/**
 * Returns the passed item if it is defined. Otherwise, queried its own block
 * @param params.blockKey Key of the queried field
 * @param params.item Item of the block. If null or only contains the block's id, the function will make a query
 * @returns The block data
 */
export default async function getBlockProps<
  BlockFragment extends TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
>(params: TGetBlockPropsParams<BlockFragment, BlockVariables>): Promise<BlockFragment | null | undefined> {
  const { document, item, blockKey, variables } = params

  if (item) {
    // If the item actually contains the block's data, just return it
    if (!isOnlyIdInItem(item)) {
      return item
    }

    // Otherwise, the id necessary to make the query might be inside the item. Just in case, we have a fallback
    const variablesWithFallback = { id: item.id, ...variables }

    if (!isVariables<BlockVariables>(variablesWithFallback)) return null

    return queryFromVariables({
      ...params,
      variables: variablesWithFallback,
    })
  }

  if (!document || !isVariables(variables)) return null

  const queriedBlockProps = await queryGql(document, variables)

  if (!queriedBlockProps || typeof queriedBlockProps !== 'object' || !blockKey) return null

  const queriedBlockFragment = queriedBlockProps[blockKey]

  return queriedBlockFragment as BlockFragment
}
