import type { InputHTMLAttributes } from 'react'
import type { AriaTextFieldOptions } from 'react-aria'
import type { RefCallBack } from 'react-hook-form'
import type { TDefaultComponent, TReactHookForm } from '../../../types/components'

export type TFieldReactHookForm = TDefaultComponent & TReactHookForm

export interface TTextInputProps
  extends TFieldReactHookForm,
    Omit<AriaTextFieldOptions<'input'>, 'onChange' | 'onBlur'> {
  name: string
  ariaLabel?: string
  errorMessage?: string
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
