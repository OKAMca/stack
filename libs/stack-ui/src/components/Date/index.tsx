import { useDateFormatter } from '@react-aria/i18n'
import { isEmpty } from 'lodash'
import { useIsSSR } from 'react-aria'
import useThemeContext from '../../providers/Theme/hooks'
import type { TDateProps } from './interface'

const DateComponent = (props: TDateProps) => {
  const {
    as: Component = 'time',
    date,
    tokens,
    customTheme,
    dateFormatterOptions = { month: 'long', day: 'numeric', year: 'numeric' },
    themeName = 'typography',
    ...rest
  } = props
  const isSSR = useIsSSR()

  const parsedDate = new Date(date)

  const formatter = useDateFormatter(dateFormatterOptions)

  const formattedDate = formatter.format(parsedDate)
  const theme = useThemeContext(themeName, tokens, customTheme)

  return isSSR || isEmpty(formattedDate) ? null : (
    <Component {...rest} dateTime={parsedDate.toISOString()} className={theme}>
      {formattedDate}
    </Component>
  )
}

export default DateComponent
