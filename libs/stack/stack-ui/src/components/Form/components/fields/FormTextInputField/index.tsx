import { ReactHookFormInput } from '../../../../fields/TextInputField'
import type { TFormTextInputField } from './interface'

const FormTextInputField = (props: TFormTextInputField) => {
  const { name } = props

  return <ReactHookFormInput name={name ?? ''} {...props} />
}

export default FormTextInputField
