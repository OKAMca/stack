import type { Nullable, TToken } from '@okam/stack-ui'
import type { TBlockSerializerProps } from '../components/BlockSerializer/interface'
import type { TBlockDocument, TBlockVariables, TCommonBlockFragment } from '../types/block'
import { defaultGraphqlRequestClient } from '@okam/directus-query'
import { GraphQLClient } from 'graphql-request'
import { get } from 'radashi'
import { useFragment as getFragment } from '../generated/fragment-masking'
import { BlockSettingsFragmentDoc } from '../generated/graphql'
import getBlockProps from './getBlockProps'

function isClient<Fragment extends TCommonBlockFragment, Variables extends TBlockVariables = TBlockVariables>(
  docOrClient: Nullable<TBlockDocument<Fragment, Variables> | GraphQLClient>,
) {
  return docOrClient instanceof GraphQLClient
}

/**
 * General function to fetch the block data and its settings. Features the decision-making logic of {@link getBlockProps} that allows blocks to work with both passed props and queried props.
 * @param props Props of the block component. Pass props directly from the block component.
 * @param blockKey Key of the block data in the GraphQL document. Allows mapping props regardless of the block's collection name. Usually the block's collection name with `_by_id` appended since most queries are made by id.
 * @param docOrClient Client to pass to `queryGql`. Defaults to `defaultGraphqlRequestClient`. **Deprecated**: can also be a fallback for `props.document`.
 * @returns The block data and its settings.
 *
 * @example
 * ```tsx
 * const BlockButtons = (props: TBlockSerializerProps<BlockButtonsFragment>) => {
 *   const key = 'block_buttons_by_id'
 *   const { tokens } = props
 *   const { link, cmsTokens, variant } = await getBlock(props, key)
 *   return <Link {...link} tokens={{ ...tokens, ...cmsTokens, style: variant }} />
 * }
 * ```
 */
export async function getBlock<
  Fragment extends TCommonBlockFragment,
  Variables extends TBlockVariables = TBlockVariables,
>(
  _props: TBlockSerializerProps<Fragment, Variables>,
  _blockKey: string,
  /**
   * @default defaultGraphqlRequestClient
   */
  _client?: GraphQLClient,
): Promise<Fragment & { cmsTokens: TToken }>

export async function getBlock<
  Fragment extends TCommonBlockFragment,
  Variables extends TBlockVariables = TBlockVariables,
>(
  _props: TBlockSerializerProps<Fragment, Variables>,
  _blockKey: string,
  /**
   * @deprecated Use props.document instead
   */
  _doc?: TBlockDocument<Fragment, Variables>,
): Promise<Fragment & { cmsTokens: TToken }>

export async function getBlock<
  Fragment extends TCommonBlockFragment,
  Variables extends TBlockVariables = TBlockVariables,
>(
  props: TBlockSerializerProps<Fragment, Variables>,
  blockKey: string,
  docOrClient: TBlockDocument<Fragment, Variables> | GraphQLClient = defaultGraphqlRequestClient,
): Promise<Fragment & { cmsTokens: TToken }> {
  const item = get<Nullable<TCommonBlockFragment>>(props, 'item')
  const isPropClient = isClient(docOrClient)

  const document = get<TBlockDocument<Fragment, Variables>>(props, 'document')
  const variables = get<Variables>(props, 'variables')

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
  return { ...(propsWithFallback as Fragment), cmsTokens: tokens }
}
