import type { Noop, RefCallBack } from 'react-hook-form'
import type { TDefaultComponent } from '../../../types/components'

export interface TCheckboxProps extends TDefaultComponent {
  id: string
  label: string
  name: string
  required?: boolean
  isDisabled?: boolean
  isError?: boolean
  errorMessage?: string
  ariaLabel?: string
  value?: string
  onBlur?: Noop
  onChange?: () => void
  inputRef?: RefCallBack
}

export interface TCheckboxLabelStyles {
  isDisabled?: boolean
}

export interface TCheckboxStyles {
  isDisabled?: boolean
  isFocused?: boolean
  isError?: boolean
}
