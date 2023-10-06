import type { ReactNode } from 'react'
import type { TDefaultComponent } from '../../../types/components'

export interface TRadioGroupProps extends TDefaultComponent {
  children: ReactNode
  isError: boolean
  isDisabled: boolean
  errorMessage?: string
  label?: string
}
