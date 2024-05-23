import type { Nullable, TDefaultComponent } from '@okam/stack-ui'
import type { Variables } from 'graphql-request'
import type { FunctionComponent } from 'react'
import type { TCommonBlockFragment, TAdditionalProps } from '../../types/block'

export interface TBlock<
  BlockFragment extends TCommonBlockFragment = TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
> {
  collection?: Nullable<string>
  item?: Nullable<BlockFragment>
  variables?: Partial<BlockVariables>
}

export interface TBlockSerializerProps<
  BlockFragment extends TCommonBlockFragment = TCommonBlockFragment,
  BlockVariables extends Variables = Variables,
  AdditionalProps extends TAdditionalProps = TAdditionalProps,
> extends TBlock<BlockFragment, BlockVariables>,
    TDefaultComponent {
  config?: TBlockSerializerConfig
  defaultVariant?: string
  additionalProps?: AdditionalProps
}

export type TBlockFunctionComponent<BlockFragment extends TCommonBlockFragment = TCommonBlockFragment> =
  FunctionComponent<TBlockSerializerProps<BlockFragment>>

export type TBlockSerializerConfigComponent<BlockFragment extends TCommonBlockFragment = TCommonBlockFragment> = {
  [blockKey: string]: {
    default: TBlockFunctionComponent<BlockFragment>
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
