import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Nullable, TDefaultComponent } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import type { FunctionComponent } from 'react'
import type {
  TCommonBlockFragment,
  TAdditionalProps,
  TBlockQuery,
  TBlockVariables,
  TBlockDocument,
} from '../../types/block'

export interface TBlock<
  BlockFragment extends TCommonBlockFragment = TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
> {
  collection?: Nullable<string>
  item?: Nullable<BlockFragment>
  variables?: TBlockVariables<BlockVariables>
  document?: TypedDocumentNode<TBlockQuery<BlockFragment>, BlockVariables>
}

export type TBlockSerializerProps<
  BlockFragment extends TCommonBlockFragment = TCommonBlockFragment,
  BlockVariables extends Variables = TBlockVariables,
  AdditionalProps extends TAdditionalProps = TAdditionalProps,
> = TBlock<BlockFragment, BlockVariables> &
  TDefaultComponent & {
    config?: TBlockSerializerConfig
    defaultVariant?: string
    additionalProps?: AdditionalProps
  }

export type TBlockFunctionComponent<BlockFragment extends TCommonBlockFragment = TCommonBlockFragment> =
  FunctionComponent<TBlockSerializerProps<BlockFragment>>

export type TBlockSerializerConfigComponent<BlockFragment extends TCommonBlockFragment = TCommonBlockFragment> = {
  [blockKey: string]: {
    default: TBlockFunctionComponent<BlockFragment>
    document?: TBlockDocument<BlockFragment>
    defaultVariant?: string
    getVariant?: (props: TBlockSerializerProps<BlockFragment>) => Nullable<string>
    variants?: {
      [blockVariant: string]: TBlockFunctionComponent<BlockFragment>
    }
  }
}

export interface TBlockSerializerConfig {
  components: TBlockSerializerConfigComponent
}
