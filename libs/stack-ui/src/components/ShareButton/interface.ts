import type { Key } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TShareButtonProps extends TDefaultComponent<TShareButtonTokens> {
  icon?: string
  ariaLabel: string
  sharingLinksList: TShareButtonLink[]
  placement?: 'right' | 'left' | 'top' | 'bottom'
  onShare?: (key: Key) => void
}

interface TShareButtonTokens extends TToken {
  listDirection: 'row' | 'column'
}

export interface TIconsContainerProps extends Omit<TShareButtonProps, 'ariaLabel' | 'icon'> {
  isOpen: boolean
}

export interface TShareButtonLink {
  ariaLabel: string
  icon: string
  key: string
  as: 'button' | 'a'
  href?: string
}
