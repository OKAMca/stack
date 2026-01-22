'use client'

import type { Ref } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TBoxProps } from './interface'
import useThemeContext from '../../providers/Theme/hooks'

export function Box<T extends TToken>({
  as: Component = 'div',
  themeName = 'box',
  tokens,
  customTheme,
  children,
  className,
  ...rest
}: TBoxProps<T>) {
  const theme = useThemeContext(themeName, tokens, customTheme)

  return (
    <Component {...rest} className={theme}>
      {children}
    </Component>
  )
}

export interface TBoxWithForwardRefProps<T = TToken> extends TBoxProps<T> {
  ref?: Ref<HTMLElement>
}

export function BoxWithForwardRef<T extends TToken>({
  ref,
  as: Component = 'div',
  tokens,
  themeName = 'box',
  customTheme,
  children,
  ...rest
}: TBoxWithForwardRefProps<T>) {
  const theme = useThemeContext(themeName, tokens, customTheme)
  return (
    <Component {...rest} ref={ref} className={theme}>
      {children}
    </Component>
  )
}

BoxWithForwardRef.displayName = 'BoxWithForwardRef'
