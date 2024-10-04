'use client'

/* eslint-disable react/display-name */
import React from 'react'
import useThemeContext from '../../providers/Theme/hooks'
import type { TToken } from '../../providers/Theme/interface'
import type { TTypographyProps } from './interface'

const Typography = <T extends TToken>({
  as: Component = 'span',
  themeName = 'typography',
  tokens,
  customTheme,
  children,
  ...rest
}: TTypographyProps<T>) => {
  const theme = useThemeContext(themeName, tokens, customTheme)

  return (
    <Component {...rest} className={theme}>
      {children}
    </Component>
  )
}

export const TypographyWithForwardRef = React.forwardRef((props: TTypographyProps, ref: React.Ref<HTMLElement>) => {
  const { as: Component = 'span', tokens, themeName = 'typography', customTheme, children, ...rest } = props
  const theme = useThemeContext(themeName, tokens, customTheme)
  return (
    <Component {...rest} ref={ref} className={theme}>
      {children}
    </Component>
  )
})

export default Typography
