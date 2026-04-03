import type { ReactNode } from 'react'
import type { AriaButtonProps, AriaSearchFieldProps } from 'react-aria'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'

export interface TSearchActionProps {
  value: string
  clearButtonProps: AriaButtonProps
  isDisabled: boolean
  tokens: TToken
  themeName: string
}

export default interface TSearchProps<T = TToken> extends AriaSearchFieldProps, TDefaultComponent<T> {
  disabled?: boolean
  placeholder?: string
  ariaLabel?: string
  errorMessage?: ReactNode
  renderAction?: (props: TSearchActionProps) => ReactNode
}
