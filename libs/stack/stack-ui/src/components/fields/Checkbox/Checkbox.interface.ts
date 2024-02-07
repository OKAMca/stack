import type React from 'react'
import type { AriaCheckboxProps } from 'react-aria'
import type { TDefaultComponent } from '../../../types/components'

export interface TCheckboxProps extends TDefaultComponent, AriaCheckboxProps {
  label: string
  isError?: boolean
  errorMessage?: string
  ariaLabel?: string
  icon?: React.ReactNode
}

export interface TCheckboxLabelStyles {
  isDisabled?: boolean
}

export interface TCheckboxStyles {
  isDisabled?: boolean
  isFocused?: boolean
  isError?: boolean
}
