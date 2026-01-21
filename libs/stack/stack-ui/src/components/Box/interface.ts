import type { DOMAttributes } from '@react-types/shared'
import type * as React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TBoxProps<T = TToken> extends TDefaultComponent<T>, DOMAttributes {
  className?: string
  children?: React.ReactNode
  dangerouslySetInnerHTML?: { __html: string | TrustedHTML }
}
