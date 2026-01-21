import type * as React from 'react'
import type { Ref, RefAttributes } from 'react'
import type { PressEvent } from 'react-aria'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'
import type { NextLinkProps } from '../../types/next-link'

export type TButtonAnchorElement = HTMLAnchorElement & HTMLButtonElement

export interface TButtonProps<T = TToken> extends TDefaultComponent<T> {
  children?: React.ReactNode
  id?: string
  href?: string
  disabled?: boolean
  download?: boolean | string
  target?: string
  rel?: string
  handlePress?: ((_e: PressEvent) => void) | undefined
  tabIndex?: number
  role?: string
  isDisabled?: boolean
}

export type TButtonRef = Ref<TButtonAnchorElement>

export type TButtonRefAttributes = RefAttributes<TButtonAnchorElement>

export interface TAnchorProps<T = TToken> extends TButtonProps<T> {
  /**
   * @deprecated To render a themeable `next/link` component, use the `Link` component from `@okam/next-component`.
   */
  nextLinkProps?: NextLinkProps
}

export type TAnchorRef = Ref<TButtonAnchorElement>

export type TAnchorRefAttributes = RefAttributes<TButtonAnchorElement>
