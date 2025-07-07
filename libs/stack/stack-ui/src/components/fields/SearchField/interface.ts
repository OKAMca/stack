import type React from 'react'
import type { AriaSearchFieldProps } from 'react-aria'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'

export default interface TSearchProps<T = TToken> extends AriaSearchFieldProps, TDefaultComponent<T> {
  disabled?: boolean
  placeholder?: string
  ariaLabel?: string
  errorMessage?: React.ReactNode
  icon?: React.ReactNode
}
