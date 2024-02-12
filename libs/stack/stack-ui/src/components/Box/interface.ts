/* eslint-disable @typescript-eslint/naming-convention */
import type React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TBoxProps<T = TToken> extends TDefaultComponent<T> {
  className?: string
  children?: React.ReactNode
  dangerouslySetInnerHTML?: { __html: string | TrustedHTML }
}
