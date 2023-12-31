import type React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TShareButtonProps extends TDefaultComponent<TShareButtonTokens> {
  id: string
  icon?: React.ReactNode
  ariaLabel: string
  sharingLinksList: TShareButtonLink[]
  onShare?: (sharingMedium: string) => void
  offset?: number
}

interface TShareButtonTokens extends TToken {
  listDirection: 'row' | 'column'
}

export interface TIconsContainerProps extends Omit<TShareButtonProps, 'ariaLabel' | 'icon'> {
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
