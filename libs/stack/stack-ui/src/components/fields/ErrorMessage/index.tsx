import Typography from '../../Typography'
import type { TErrorMessageProps } from './interface'

const ErrorMessage = (props: TErrorMessageProps) => {
  const { themeName = 'errorMessage', validationErrors, tokens, children, ...rest } = props
  return (
    <Typography {...rest} themeName={themeName} tokens={tokens}>
      {children ?? validationErrors?.join(', ')}
    </Typography>
  )
}

export default ErrorMessage
