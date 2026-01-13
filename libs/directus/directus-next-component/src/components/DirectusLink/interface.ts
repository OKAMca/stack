import type { TDefaultComponent, TAnchorProps } from '@okam/stack-ui'
import type { AriaAttributes, ComponentType } from 'react'
import type { TLinks } from '../../types/links'

export type DirectusLink = Omit<TDefaultComponent, 'children'> & Omit<Partial<TLinks>, 'tokens'> & AriaAttributes

export interface TGetDirectusLink extends DirectusLink {
  propsConfig?: TDirectusLinkPropsConfig
}
export interface TDirectusLinkProps extends DirectusLink {
  componentsConfig?: TDirectusLinkComponentsConfig
  propsConfig?: TDirectusLinkPropsConfig
}

export type TDirectusLinkComponentsConfig = Record<string, ComponentType<TDirectusLinkProps>>

export type TDirectusLinkPropsConfig<ReturnProps extends TAnchorProps = TAnchorProps> = Record<
  string,
  (props: TGetDirectusLink) => ReturnProps
>
