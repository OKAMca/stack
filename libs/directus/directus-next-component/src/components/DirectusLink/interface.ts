/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import type { TDefaultComponent, TAnchorProps } from '@okam/stack-ui'
import type { AriaAttributes, ComponentType } from 'react'
import type { TLinks } from '../../types/links'

export interface TDirectusLinkProps
  extends Omit<TDefaultComponent, 'children'>,
    Omit<Partial<TLinks>, 'tokens'>,
    AriaAttributes {
  componentsConfig?: TDirectusLinkComponentsConfig
  propsConfig?: TDirectusLinkPropsConfig
}

export type TDirectusLinkComponentsConfig = Record<string, ComponentType<TDirectusLinkProps>>

export type TDirectusLinkPropsConfig<ReturnProps extends TAnchorProps = TAnchorProps> = Record<
  string,
  (props: TDirectusLinkProps) => ReturnProps
>
