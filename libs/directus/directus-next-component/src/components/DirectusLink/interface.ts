/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import type { TDefaultComponent } from '@okam/stack-ui'
import type { TAnchorPropsProps } from 'libs/stack/stack-ui/src/components/Button/interface'
import type { ComponentType } from 'react'
import type { TLinks } from '../../types/links'

export interface TDirectusLinkProps extends Omit<TDefaultComponent, 'children'>, Omit<Partial<TLinks>, 'tokens'> {
  componentsConfig?: TDirectusLinkComponentsConfig
  propsConfig?: TDirectusLinkPropsConfig
}

export type TDirectusLink = Omit<
  TDirectusLinkProps,
  'collection' | 'anchor' | 'external_link' | 'file' | 'target' | 'type'
>

export type TDirectusLinkComponentsConfig = Record<string, ComponentType<TDirectusLink>>

export type TDirectusLinkPropsConfig<ReturnProps extends TAnchorPropsProps = TAnchorPropsProps> = Record<
  string,
  (props: TDirectusLinkProps) => ReturnProps
>
