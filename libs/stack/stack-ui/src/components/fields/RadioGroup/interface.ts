import type * as React from 'react'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'

export interface TRadioGroupProps<T = TToken> extends TDefaultComponent<T> {
  children: React.ReactNode
  isError?: boolean
  isDisabled?: boolean
  errorMessage?: string
  label?: string
}
