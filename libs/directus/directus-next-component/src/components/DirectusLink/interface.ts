/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import type { TDefaultComponent } from '@okam/stack-ui'
import type { ComponentType } from 'react'
import type { TLinks } from '../../types/links'

export interface TDirectusLinkProps
  extends Omit<TDefaultComponent, 'children' | 'as'>,
    Omit<Partial<TLinks>, 'tokens'> {
  /**
   * Config keys must be in Pascal case. For example, `external_link` type would have the `ExternalLink` key
   */
  config?: TDirectusLinkConfig
}

export type TDirectusLink = Omit<
  TDirectusLinkProps,
  'collection' | 'anchor' | 'external_link' | 'file' | 'target' | 'type'
>

export type TDirectusLinkConfig = Record<string, ComponentType<TDirectusLink>>

export type TAnchorProps = TDirectusLink & Pick<TDirectusLinkProps, 'anchor'>

export type TExternalLinkProps = TDirectusLink & Pick<TDirectusLinkProps, 'external_link' | 'target'>

export type TCollectionProps = TDirectusLink & Pick<TDirectusLinkProps, 'collection' | 'target'>

export type TFileProps = TDirectusLink & Pick<TDirectusLinkProps, 'file'>
