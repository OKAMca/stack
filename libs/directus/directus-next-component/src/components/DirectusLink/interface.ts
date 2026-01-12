import type { TDefaultComponent, TAnchorProps } from '@okam/stack-ui'
import type { AriaAttributes, ComponentType } from 'react'
import type { TLinks } from '../../types/links'

export type DirectusLink = Omit<TDefaultComponent, 'children'> & Omit<Partial<TLinks>, 'tokens'> & AriaAttributes

export interface TGetDirectusLink extends DirectusLink {
  propsConfig?: TTDirectusLinkPropsConfig
}
export interface TDirectusLinkProps extends DirectusLink {
  componentsConfig?: TDirectusLinkComponentsConfig
  propsConfig?: TTDirectusLinkPropsConfig
}

export type TDirectusLinkComponentsConfig = Record<string, ComponentType<TDirectusLinkProps>>

export type TTDirectusLinkPropsConfig<ReturnProps extends TAnchorProps = TAnchorProps> = Record<
  string,
  (props: TGetDirectusLink) => ReturnProps
>
