import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TDefaultComponent } from '../../../types/components'

const DatePicker = (
  props: TDefaultComponent & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
) => {
  const { type = 'date', themeName = 'button', tokens, customTheme, ...rest } = props
  const datePickerTheme = useThemeContext(themeName, tokens, customTheme)

  return <input type={type} className={datePickerTheme} {...rest} />
}

export default DatePicker
