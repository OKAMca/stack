import type { ReactNode } from 'react'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'

export interface TRadioGroupProps<T = TToken> extends TDefaultComponent<T> {
  children: ReactNode
  isError?: boolean
  isDisabled?: boolean
  errorMessage?: string
  label?: string
}
