import FormField from '../FormField'
import type { TFormConfig, TFormFieldDispatcherProps } from './interface'

export const formConfig: TFormConfig = (schema) => {
  return schema
}

const FormFieldDispatcher = (props: TFormFieldDispatcherProps) => {
  const { fields, config, customTheme, themeName } = props

  return fields.map((field) => (
    <FormField
      themeName={themeName}
      tokens={field.tokens}
      customTheme={field.customTheme || customTheme}
      key={`${field.item?.name}-${field.type}`}
      item={field.item}
      config={config}
      type={field.type}
    />
  ))
}

export default FormFieldDispatcher
