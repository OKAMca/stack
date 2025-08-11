import type { TDefaultComponent, TAnchorProps } from '@okam/stack-ui'
import type { AriaAttributes, ComponentType } from 'react'
import type { TLinks } from '../../types/links'

export type DirectusLink = Omit<TDefaultComponent, 'children'> & Omit<Partial<TLinks>, 'tokens'> & AriaAttributes

export interface GetDirectusLink extends DirectusLink {
  propsConfig?: DirectusLinkPropsConfig
}
export interface DirectusLinkProps extends DirectusLink {
  componentsConfig?: DirectusLinkComponentsConfig
  propsConfig?: DirectusLinkPropsConfig
}

export type DirectusLinkComponentsConfig = Record<string, ComponentType<DirectusLinkProps>>

export type DirectusLinkPropsConfig<ReturnProps extends TAnchorProps = TAnchorProps> = Record<
  string,
  (props: GetDirectusLink) => ReturnProps
>
