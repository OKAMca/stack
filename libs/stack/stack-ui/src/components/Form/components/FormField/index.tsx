import type { TDispatchedField } from '../FormFieldDispatcher/interface'
import type { TFormField } from './interface'

const FormField = async (props: TFormField) => {
  const { config, item, type, themeName, tokens, customTheme } = props

  if (!config) return null

  const { mapping } = config
  const { base, variants } = mapping

  const field = config?.fields?.[type ?? '']

  const getFieldComponent = (dipatchedField: TDispatchedField, mappedType: string) => {
    const themeKey = dipatchedField?.themeKey ?? mappedType

    const formFieldProps = {
      ...item,
      themeName: `${themeName}.${themeKey}`,
      tokens,
      customTheme,
    }

    const FormFieldComponent = dipatchedField?.default
    return <FormFieldComponent {...formFieldProps} />
  }

  if (!base) return null

  // TODO : handle variants
  if (variants) {
    const variantKeys = Object.keys(variants)
    console.log(field?.variants?.variant1?.default)
  }

  return getFieldComponent(field, type ?? base)
}

export default FormField
