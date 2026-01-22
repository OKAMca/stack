import type { ReactNode } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TTypographyProps<T = TToken> extends TDefaultComponent<T> {
  children?: ReactNode
  dangerouslySetInnerHTML?: { __html: string | TrustedHTML }
}
