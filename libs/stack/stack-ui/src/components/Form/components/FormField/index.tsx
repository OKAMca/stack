import type { TFormField } from './interface'

const FormField = async (props: TFormField) => {
  const { config, item, type, themeName, tokens, customTheme } = props

  if (!config) return null

  const { mapping } = config
  const { base, variants } = mapping

  const formFieldProps = {
    ...item,
    themeName,
    tokens,
    customTheme,
  }

  if (!base) return null

  const FormFieldComponent = config?.fields?.[type ?? '']?.default
  return <FormFieldComponent {...formFieldProps} />
}

export default FormField
