import type { TDefaultComponent } from '@okam/stack-ui'
import { useThemeContext } from '@okam/stack-ui'
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'

const DatePicker = (
  props: TDefaultComponent & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
) => {
  const { type = 'date', themeName = 'button', tokens, customTheme, ...rest } = props
  const datePickerTheme = useThemeContext(themeName, tokens, customTheme)

  return <input type={type} className={datePickerTheme} {...rest} />
}

export default DatePicker
