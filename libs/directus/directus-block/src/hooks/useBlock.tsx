import { defaultGraphqlRequestClient } from '@okam/directus-query'
import type { Nullable, TToken } from '@okam/stack-ui'
import type { TypedQueryDocumentNode } from 'graphql'
import type { GraphQLClient } from 'graphql-request'
import { get } from 'radashi'
import type { TBlockSerializerProps } from '../components/BlockSerializer/interface'
import { BlockSettingsFragmentDoc } from '../generated/graphql'
import type { TBlockQuery, TBlockVariables, TCommonBlockFragment } from '../types/block'
import { getBlockProps, getFragment } from '../utils'

function isClient<T extends TCommonBlockFragment>(
  docOrClient: Nullable<TypedQueryDocumentNode<TBlockQuery<T>, TBlockVariables> | GraphQLClient>,
) {
  return typeof docOrClient === 'function'
}

/**
 * Automatically determines wether a block should use `props.item` (passed props) or `props.variables` (makes its own query).
 * @param props Props of the block/block query. `props.item` serves as props the block uses directly, where as `props.variables` serves as variables for the block query.
 * @param blockKey Key of the block query that serves to return the contents of the block directly, removing one step
 * @param docOrClient Client to pass to `queryGql`. Defaults to `defaultGraphqlRequestClient`. **Deprecated**: can also be a fallback for `props.document`.
 * @returns Contents of `blockKey` in the query. Also returns `settings.tokens` as `cmsTokens` for convenience.
 */
async function useBlock<T extends TCommonBlockFragment>(
  props: TBlockSerializerProps<T>,
  blockKey: string,
  /**
   * @default defaultGraphqlRequestClient
   */
  client?: GraphQLClient,
): Promise<T & { cmsTokens: TToken }>

async function useBlock<T extends TCommonBlockFragment>(
  props: TBlockSerializerProps<T>,
  blockKey: string,
  /**
   * @deprecated Use props.document instead
   */
  doc?: TypedQueryDocumentNode<TBlockQuery<T>, TBlockVariables>,
): Promise<T & { cmsTokens: TToken }>

async function useBlock<T extends TCommonBlockFragment>(
  props: TBlockSerializerProps<T>,
  blockKey: string,
  docOrClient: TypedQueryDocumentNode<TBlockQuery<T>, TBlockVariables> | GraphQLClient = defaultGraphqlRequestClient,
): Promise<T & { cmsTokens: TToken }> {
  const item = get<Nullable<TCommonBlockFragment>>(props, 'item')
  const isPropClient = isClient(docOrClient)

  const document = get<TypedQueryDocumentNode<TBlockQuery<T>, TBlockVariables>>(props, 'document')
  const variables = get<TBlockVariables<TBlockVariables>>(props, 'variables')

  const propsWithFallback = await getBlockProps(
    {
      item,
      blockKey,
      document: document ?? (!isPropClient ? docOrClient : undefined),
      variables,
    },
    isPropClient ? docOrClient : undefined,
  )

  const { tokens } = getFragment(BlockSettingsFragmentDoc, propsWithFallback?.settings) ?? {}
  return { ...(propsWithFallback as T), cmsTokens: tokens }
}

export default useBlock
