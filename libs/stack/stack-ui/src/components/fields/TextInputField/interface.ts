import type { InputHTMLAttributes } from 'react'
import type { AriaTextFieldOptions } from 'react-aria'
import type { ControllerRenderProps, RefCallBack } from 'react-hook-form'
import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm<T = TToken> = TDefaultComponent<T> & TReactHookForm

export interface TTextInputProps<T = TToken>
  extends TFieldReactHookForm<T>,
    Omit<AriaTextFieldOptions<'input'>, 'onChange' | 'onBlur' | 'onFocus'> {
  name: string
  ariaLabel?: string
  errorMessage?: string
  isInvalid?: boolean
  fieldRef?: RefCallBack
  /**
   * @deprecated use isRequired instead
   */
  required?: boolean
  /**
   * @deprecated use isDisabled instead
   */
  disabled?: boolean
  /**
   * @deprecated depends on errorMEssage
   */
  isError?: boolean
}

// @see https://react-spectrum.adobe.com/react-aria/useTextField.html
export type TUseTextFieldInputProps = InputHTMLAttributes<HTMLInputElement>
