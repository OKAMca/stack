import FormField from '../FormField'
import type { TFormFieldDispatcherProps } from './interface'

const FormFieldDispatcher = (props: TFormFieldDispatcherProps) => {
  const { fields, config, customTheme, themeName, tokens } = props

  return fields.map((field) => (
    <FormField
      customTheme={customTheme}
      themeName={themeName}
      tokens={tokens}
      key={`${field.item?.name}-${field.type}`}
      item={field.item}
      config={config}
      type={field.type}
    />
  ))
}

export default FormFieldDispatcher
