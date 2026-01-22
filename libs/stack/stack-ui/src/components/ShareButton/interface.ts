import type { ReactNode } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TShareButtonProps<T = TToken> extends TDefaultComponent<TShareButtonTokens & T> {
  id: string
  icon?: ReactNode
  ariaLabel: string
  sharingLinksList: TShareButtonLink[]
  onShare?: (_sharingMedium: string) => void
}

interface TShareButtonTokens extends TToken {
  listDirection: 'row' | 'column'
}

export interface TIconsContainerProps<T = TToken> extends Omit<TShareButtonProps<T>, 'ariaLabel' | 'icon'> {
  isOpen: boolean
  setIsOpen: (_isOpen: boolean) => void
}

export interface TShareButtonLink {
  ariaLabel: string
  icon?: ReactNode
  key: string
  onClick?: (_linkKey: string) => void
  href?: string
}
