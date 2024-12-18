'use client'

import { useDateFormatter } from '@react-aria/i18n'
import isEmpty from 'lodash.isempty'
import { useIsSSR } from 'react-aria'
import useThemeContext from '../../providers/Theme/hooks'
import type { TToken } from '../../providers/Theme/interface'
import type { TDateProps } from './interface'

const DateComponent = <T extends TToken>(props: TDateProps<T>) => {
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
