import { ajvResolver } from '@hookform/resolvers/ajv'
import type { FieldValues } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import useThemeContext from '../../providers/Theme/hooks'
import Button from '../Button'
import FormFieldDispatcher from './components/FormFieldDispatcher'
import type { TFormProps } from './interface'
import generateValidationSchema from './utils/generateValidationSchema'

const Form = <T extends FieldValues>(props: TFormProps<T>) => {
  const { submit, config, fields, customSchema } = props
  const { handleSubmit, label } = submit
  const schema = customSchema || generateValidationSchema<T>(fields)

  const { themeName = 'form', tokens, customTheme } = props
  const containerTheme = useThemeContext(`${themeName}.container`, { ...tokens }, customTheme)

  const formMethods = useForm<T>({
    resolver: ajvResolver(schema),
  })

  return (
    <FormProvider {...formMethods}>
      <form className={containerTheme} onSubmit={formMethods.handleSubmit(handleSubmit)}>
        <FormFieldDispatcher
          themeName={themeName}
          tokens={tokens}
          customTheme={customTheme}
          config={config}
          fields={fields}
        />
        <Button themeName={`${themeName}.submitButton`} tokens={tokens} customTheme={customTheme} type="submit">
          {label}
        </Button>
      </form>
    </FormProvider>
  )
}

export default Form
