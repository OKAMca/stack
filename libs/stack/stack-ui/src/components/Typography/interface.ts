/* eslint-disable @typescript-eslint/naming-convention */
import type React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TTypographyProps<T = TToken> extends TDefaultComponent<T> {
  children?: React.ReactNode
  dangerouslySetInnerHTML?: { __html: string | TrustedHTML }
}
