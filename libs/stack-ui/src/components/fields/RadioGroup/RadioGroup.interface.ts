import type React from 'react'
import type { TDefaultComponent } from '../../../types/components'

export interface TRadioGroupProps extends TDefaultComponent {
  children: React.ReactNode
  isError?: boolean
  isDisabled?: boolean
  errorMessage?: string
  label?: string
}
