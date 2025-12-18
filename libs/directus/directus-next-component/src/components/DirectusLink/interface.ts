import type { TDirectusLinkPropsConfig } from '@okam/directus-next-component'
import type { ComponentType } from 'react'
import type { TDirectusLinkBase } from '../../types/directus-link'

export interface TDirectusLinkProps extends TDirectusLinkBase {
  componentsConfig?: TDirectusLinkComponentsConfig
  propsConfig?: TDirectusLinkPropsConfig
}

export type TDirectusLinkComponentsConfig = Record<string, ComponentType<TDirectusLinkProps>>
