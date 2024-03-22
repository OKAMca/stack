import type React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TAccordionProps extends TDefaultComponent<TAccordionTokens> {
  id: string
  title: string
  icon?: React.ReactNode
  ariaLabel: string
  children: React.ReactNode
  onClick?: (isOpen: boolean) => void
  defaultIsOpen?: boolean
}

interface TAccordionTokens extends TToken {
  titleBold: boolean
  textAlign: 'center' | 'left'
}
