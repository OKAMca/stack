import type { TDefaultComponent, TAnchorProps } from '@okam/stack-ui'
import type { AriaAttributes } from 'react'
import type { TLinks } from './links'

export type TDirectusLinkBase = Omit<TDefaultComponent, 'children'> & Omit<Partial<TLinks>, 'tokens'> & AriaAttributes

export interface TDirectusLink extends TDirectusLinkBase {
  propsConfig?: TDirectusLinkPropsConfig
}

export interface TDirectusLinkAria extends TDirectusLink {
  translation?: {
    /**
     * @default 'DIRECTUS_LINK'
     */
    key?: string
    /**
     * @default 'common'
     */
    namespace?: string
  }
}

export type TDirectusLinkPropsConfig<ReturnProps extends TAnchorProps = TAnchorProps> = Record<
  string,
  (props: TDirectusLink) => ReturnProps
>
