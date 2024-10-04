import type React from 'react'
import type { AriaCheckboxProps } from 'react-aria'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'

export interface TCheckboxProps<T = TToken> extends TDefaultComponent<T>, AriaCheckboxProps {
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
