import type { TTextInputProps } from '../../../../fields/TextInputField/interface'
import type { TFormField } from '../../FormField/interface'

export interface TFormTextInputField extends Omit<TTextInputProps, 'name' | 'type' | 'validation'>, TFormField {
  name?: string
}
