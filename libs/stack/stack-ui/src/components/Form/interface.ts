import type { JSONSchemaType } from 'ajv'
import type { FormatName } from 'ajv-formats'
import type { FieldValues, SubmitHandler } from 'react-hook-form'
import type { TDefaultComponent } from '../../types/components'
import type { TFormField } from './components/FormField/interface'
import type { TFormConfigVariants, TFormFieldDispatcherConfig } from './components/FormFieldDispatcher/interface'

export interface TFormProps<T extends FieldValues> extends TDefaultComponent {
  fields: TFormField[]
  submit: {
    handleSubmit: SubmitHandler<T>
    label?: string
  }
  config: TFormFieldDispatcherConfig<string, TFormConfigVariants<string>>
  customSchema?: JSONSchemaType<T>
}

export type TFormFieldValidation = TStringValidation & TNumberValidation

interface TValidationValue<TValue> {
  value: TValue
  errorMessage: string
}

interface TStringValidation extends TBaseValidation {
  minLength?: TValidationValue<number>
  maxLength?: TValidationValue<number>
  pattern?: TValidationValue<RegExp>
  format?: TValidationValue<FormatName>
}

interface TBaseValidation {
  type: 'string' | 'number'
  required?: TValidationValue<boolean>
}

interface TNumberValidation {
  maximum?: TValidationValue<number>
  minimum?: TValidationValue<number>
  multipleOf?: TValidationValue<number>
}
