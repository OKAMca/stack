import type { TDefaultComponent, TAnchorProps } from '@okam/stack-ui'
import type { AriaAttributes, ComponentType } from 'react'
import type { TLinks } from '../../types/links'

export type DirectusLink = Omit<TDefaultComponent, 'children'> & Omit<Partial<TLinks>, 'tokens'> & AriaAttributes

export interface TGetDirectusLink extends DirectusLink {
  propsConfig?: TDirectusLinkPropsConfig
}
export interface DirectusLinkProps extends DirectusLink {
  componentsConfig?: DirectusLinkComponentsConfig
  propsConfig?: TDirectusLinkPropsConfig
}

export type DirectusLinkComponentsConfig = Record<string, ComponentType<DirectusLinkProps>>

export type TDirectusLinkPropsConfig<ReturnProps extends TAnchorProps = TAnchorProps> = Record<
  string,
  (props: TGetDirectusLink) => ReturnProps
>
