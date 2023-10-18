import type React from 'react'
import type { Maybe } from '../../types/components'

export interface MenuItem {
  id?: Maybe<string | undefined>
  target?: Maybe<string | undefined> | null
  path?: Maybe<string | undefined>
  label?: Maybe<string | undefined>
  frLabel?: Maybe<string | undefined>
  title?: Maybe<string | undefined>
  active?: Maybe<boolean>
  childItems?: Maybe<MenuItem[] | undefined>
  onClick?: () => void
}

export interface TMenuItemsProps {
  menuItems: Maybe<Maybe<MenuItem>[]> | undefined
  children?: React.ReactNode
}
