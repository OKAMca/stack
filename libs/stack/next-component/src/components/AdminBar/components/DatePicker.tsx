import { type TDefaultComponent, useThemeContext } from '@okam/stack-ui'
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'

const DatePicker = (
  props: TDefaultComponent & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
) => {
  const { type = 'date', themeName = 'adminBar.datePicker', tokens, customTheme, ...rest } = props

  // Use the theme context to get styles based on the theme path
  const datePickerTheme = useThemeContext(themeName, tokens, customTheme)

  return <input type={type} className={datePickerTheme} {...rest} />
}

export default DatePicker
