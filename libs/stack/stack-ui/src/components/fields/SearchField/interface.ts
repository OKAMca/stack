import type React from 'react'
import type { AriaSearchFieldProps } from 'react-aria'
import type { TDefaultComponent } from '../../../types/components'

export default interface TSearchProps extends AriaSearchFieldProps, TDefaultComponent {
  disabled?: boolean
  placeholder?: string
  ariaLabel?: string
  errorMessage?: React.ReactNode
}
