'server-only'

import type { Nullable } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import type { TBlockDocument, TBlockQuery, TBlockVariables, TCommonBlockFragment } from '../types/block'
import { defaultGraphqlRequestClient, queryGql } from '@okam/directus-query'
import { isEmpty } from 'radashi'

interface TGetBlockPropsParams<BlockFragment extends TCommonBlockFragment, BlockVariables extends Variables = Variables> {
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
 * Checks wether or not the item `getBlockProps` receives is valid, or if `getBlockProps` needs to query the item
 * Since `id` and `settings` are the minimum props of a block, they don't count in the actual item's data
 */
function isItemEmpty(item: TCommonBlockFragment): item is TBlockVariables {
  const { id, settings, ...restOfItem } = item ?? {}
  return isEmpty(restOfItem)
}

async function queryFromVariables<
  BlockFragment extends TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
>(params: TGetBlockPropsParams<BlockFragment, BlockVariables>, client = defaultGraphqlRequestClient) {
  const { document, blockKey, variables } = params

  if (document == null || !isVariables<BlockVariables>(variables))
    return null

  const queriedBlockProps = await queryGql(document, variables, client)

  if (queriedBlockProps == null || typeof queriedBlockProps !== 'object' || blockKey == null)
    return null

  const queriedBlockFragment = queriedBlockProps[blockKey]

  return queriedBlockFragment as BlockFragment
}

/**
 * Returns the passed item if it is defined. Otherwise, queried its own block
 * @param params.blockKey Key of the queried field
 * @param params.item Item of the block. If null or only contains the block's id, the function will make a query
 * @param client Client to pass to `queryGql`. Defaults to `defaultGraphqlRequestClient`.
 * @returns The block data
 */
export default async function getBlockProps<
  BlockFragment extends TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
>(
  params: TGetBlockPropsParams<BlockFragment, BlockVariables>,
  client = defaultGraphqlRequestClient,
): Promise<BlockFragment | null | undefined> {
  const { document, item, blockKey, variables } = params

  if (item) {
    // If the item actually contains the block's data, just return it
    if (!isItemEmpty(item)) {
      return item
    }

    // Otherwise, the id necessary to make the query might be inside the item. Just in case, we have a fallback
    const variablesWithFallback = { id: item.id, ...variables }

    if (!isVariables<BlockVariables>(variablesWithFallback))
      return null

    return queryFromVariables({
      ...params,
      variables: variablesWithFallback,
    })
  }

  if (document == null || !isVariables(variables))
    return null

  const queriedBlockProps = await queryGql(document, variables, client)

  if (queriedBlockProps == null || typeof queriedBlockProps !== 'object' || blockKey == null)
    return null

  const queriedBlockFragment = queriedBlockProps[blockKey]

  return queriedBlockFragment as BlockFragment
}
