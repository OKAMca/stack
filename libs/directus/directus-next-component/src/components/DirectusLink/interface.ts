import type { TDefaultComponent, TAnchorProps } from '@okam/stack-ui'
import type { AriaAttributes, ComponentType } from 'react'
import type { TLinks } from '../../types/links'

export type TDirectusLink = Omit<TDefaultComponent, 'children'> & Omit<Partial<TLinks>, 'tokens'> & AriaAttributes

export interface TUseDirectusLink extends TDirectusLink {
  propsConfig?: TDirectusLinkPropsConfig
}
export interface TDirectusLinkProps extends TDirectusLink {
  componentsConfig?: TDirectusLinkComponentsConfig
  propsConfig?: TDirectusLinkPropsConfig
}

export type TDirectusLinkComponentsConfig = Record<string, ComponentType<TDirectusLinkProps>>

export type TDirectusLinkPropsConfig<ReturnProps extends TAnchorProps = TAnchorProps> = Record<
  string,
  (props: TUseDirectusLink) => ReturnProps
>
