import type { TDefaultComponent } from 'libs/stack/stack-ui/src/types/components'
import type { TTextInputProps } from '../../../fields/TextInputField/interface'
import type { TFormFieldValidation } from '../../interface'
import type { TFormConfigVariants, TFormFieldDispatcherConfig } from '../FormFieldDispatcher/interface'

export interface TFormField extends TDefaultComponent {
  item?: TTextInputProps
  type?: string
  validation?: TFormFieldValidation
  config?: TFormFieldDispatcherConfig<string, TFormConfigVariants<string>>
}
