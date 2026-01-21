import type { Nullable, TDefaultComponent } from '@okam/stack-ui'
import type * as React from 'react'
import type { TAdditionalProps } from '../../types/block'
import type { TBlockSerializerConfig, TBlockSerializerProps } from '../BlockSerializer/interface'

interface TBaseBlockDispatcherProps<AdditionalProps extends TAdditionalProps = TAdditionalProps> extends Omit<
  TDefaultComponent,
  'children'
> {
  config?: TBlockSerializerConfig
  defaultVariant?: string
  additionalProps?: AdditionalProps
  children?: (_props: TBlockSerializerProps) => React.ReactNode
}

export type TBlockDispatcherProps<AdditionalProps extends TAdditionalProps = TAdditionalProps>
  = | (TBaseBlockDispatcherProps<AdditionalProps> & { block: Nullable<TBlockSerializerProps> })
    | (TBaseBlockDispatcherProps<AdditionalProps> & { blocks: Nullable<TBlockSerializerProps>[] })
