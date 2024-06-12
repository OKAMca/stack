/* eslint-disable @typescript-eslint/naming-convention */
import type { TDefaultComponent, Nullable } from '@okam/stack-ui'
import type React from 'react'
import type { TAdditionalProps } from '../../types/block'
import type { TBlockSerializerProps, TBlockSerializerConfig } from '../BlockSerializer/interface'

interface TBaseBlockDispatcherProps<AdditionalProps extends TAdditionalProps = TAdditionalProps>
  extends Omit<TDefaultComponent, 'children'> {
  config?: TBlockSerializerConfig
  defaultVariant?: string
  additionalProps?: AdditionalProps
  children?: (props: TBlockSerializerProps) => React.ReactNode
}

export type TBlockDispatcherProps<AdditionalProps extends TAdditionalProps = TAdditionalProps> =
  | (TBaseBlockDispatcherProps<AdditionalProps> & { block: Nullable<TBlockSerializerProps> })
  | (TBaseBlockDispatcherProps<AdditionalProps> & { blocks: Nullable<TBlockSerializerProps>[] })
