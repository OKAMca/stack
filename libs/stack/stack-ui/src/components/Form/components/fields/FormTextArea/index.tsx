import { ReactHookFormTextArea } from '../../../../fields/TextArea'
import type { TFormTextInputField } from './interface'

const FormTextAreaField = (props: TFormTextInputField) => {
  const { name } = props

  return <ReactHookFormTextArea name={name ?? ''} {...props} />
}

export default FormTextAreaField
