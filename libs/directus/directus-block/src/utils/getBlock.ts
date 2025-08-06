import type { Nullable, TToken } from '@okam/stack-ui'
import type { TypedQueryDocumentNode } from 'graphql'
import { get } from 'radashi'
import type { TBlockSerializerProps } from '../components/BlockSerializer/interface'
import { useFragment as getFragment } from '../generated/fragment-masking'
import { BlockSettingsFragmentDoc } from '../generated/graphql'
import type { TBlockQuery, TBlockVariables, TCommonBlockFragment } from '../types/block'
import getBlockProps from './getBlockProps'

export async function getBlock<T extends TCommonBlockFragment>(
  props: TBlockSerializerProps<T>,
  blockKey: string,
  doc?: TypedQueryDocumentNode<TBlockQuery<T>, TBlockVariables>,
): Promise<T & { cmsTokens: TToken }> {
  const item = get<Nullable<TCommonBlockFragment>>(props, 'item')
  const document = doc ?? get<TypedQueryDocumentNode<TBlockQuery<T>, TBlockVariables>>(props, 'document')
  const variables = get<TBlockVariables<TBlockVariables>>(props, 'variables')

  const propsWithFallback = await getBlockProps({
    item,
    blockKey,
    document,
    variables,
  })

  const { tokens } = getFragment(BlockSettingsFragmentDoc, propsWithFallback?.settings) ?? {}
  return { ...(propsWithFallback as T), cmsTokens: tokens }
}
