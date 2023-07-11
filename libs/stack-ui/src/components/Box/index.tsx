/* eslint-disable react/display-name */
import React from 'react'
import useThemeContext from '../../providers/Theme/hooks'
import type { TBoxProps } from './interface'

const Box = ({
  as: Component = 'div',
  themeName = 'box',
  tokens,
  customTheme,
  children,
  className,
  ...rest
}: TBoxProps) => {
  const theme = useThemeContext(themeName, tokens, customTheme)

  return (
    <Component {...rest} className={theme}>
      {children}
    </Component>
  )
}

export const BoxWithForwardRef = React.forwardRef((props: TBoxProps, ref: React.Ref<HTMLElement>) => {
  const { as: Component = 'div', tokens, themeName = 'box', customTheme, children, ...rest } = props
  const theme = useThemeContext(themeName, tokens, customTheme)
  return (
    <Component {...rest} ref={ref} className={theme}>
      {children}
    </Component>
  )
})

export default Box
