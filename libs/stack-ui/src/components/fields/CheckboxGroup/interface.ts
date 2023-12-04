import type React from 'react'
import type { CheckboxGroupProps } from 'react-stately'
import type { TDefaultComponent } from '../../../types/components'

export interface TCheckboxGroupProps extends TDefaultComponent, CheckboxGroupProps {
  children: React.ReactNode
  isError?: boolean
  isDisabled?: boolean
  errorMessage?: string
  label?: string
}
