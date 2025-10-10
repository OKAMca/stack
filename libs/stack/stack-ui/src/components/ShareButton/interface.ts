import type React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TShareButtonProps<T = TToken> extends TDefaultComponent<TShareButtonTokens & T> {
  icon?: React.ReactNode
  ariaLabel: string
  sharingLinksList: TShareButtonLink[]
  onShare?: (sharingMedium: string) => void
  offset?: number
}

interface TShareButtonTokens extends TToken {
  listDirection: 'row' | 'column'
}

export interface TIconsContainerProps<T = TToken> extends Omit<TShareButtonProps<T>, 'ariaLabel' | 'icon'> {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export interface TShareButtonLink {
  ariaLabel: string
  icon?: React.ReactNode
  key: string
  onClick?: (linkKey: string) => void
  href?: string
}
