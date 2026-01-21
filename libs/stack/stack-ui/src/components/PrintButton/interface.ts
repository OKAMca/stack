import type * as React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TPrintButtonProps<T = TToken> extends TDefaultComponent<T> {
  icon?: React.ReactNode
  ariaLabel: string
}
