import type { Nullable, TToken } from '@okam/stack-ui'
import { get } from 'radashi'
import type { TBlockSerializerProps } from '../components/BlockSerializer/interface'
import { BlockSettingsFragmentDoc } from '../generated/graphql'
import type { TBlockDocument, TBlockVariables, TCommonBlockFragment } from '../types/block'
import { getBlockProps, getFragment } from '../utils'

/**
 * General function to fetch the block data and its settings. Features the decision-making logic of {@link getBlockProps} that allows blocks to work with both passed props and queried props.
 * @param props Props of the block component. Pass props directly from the block component.
 * @param blockKey Key of the block data in the GraphQL document. Allows mapping props regardless of the block's collection name. Usually the block's collection name with `_by_id` appended since most queries are made by id.
 * @param doc Alternative for passing the GraphQL document to the block component. If not passed, the document will be retrieved from the block's props or config.
 * @returns The block data and its settings.
 *
 * @example
 * ```tsx
 * const BlockButtons = (props: TBlockSerializerProps<BlockButtonsFragment>) => {
 *   const key = 'block_buttons_by_id'
 *   const { tokens } = props
 *   const { link, cmsTokens, variant } = await useBlock(props, key)
 *   return <Link {...link} tokens={{ ...tokens, ...cmsTokens, style: variant }} />
 * }
 * ```
 */
export default async function useBlock<
  Fragment extends TCommonBlockFragment,
  Variables extends TBlockVariables = TBlockVariables,
>(
  props: TBlockSerializerProps<Fragment, Variables>,
  blockKey: string,
  doc?: TBlockDocument<Fragment, Variables>,
): Promise<Fragment & { cmsTokens: TToken }> {
  const item = get<Nullable<Fragment>>(props, 'item')
  const document = doc ?? get<TBlockDocument<Fragment, Variables>>(props, 'document')
  const variables = get<TBlockVariables<Variables>>(props, 'variables')

  const propsWithFallback = await getBlockProps({
    item,
    blockKey,
    document,
    variables,
  })

  const { tokens } = getFragment(BlockSettingsFragmentDoc, propsWithFallback?.settings) ?? {}
  return { ...(propsWithFallback as Fragment), cmsTokens: tokens }
}
