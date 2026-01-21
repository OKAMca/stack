'use client'

import type { TCustomTheme, TToken } from './interface'
import { get } from 'radashi'
import { useTheme } from './index'

function useThemeContext(func?: string | null, props: TToken = {}, customTheme: TCustomTheme = null) {
  const theme = useTheme()
  if (theme != null && func != null) {
    const { brandTheme } = theme
    const themeFunc = get<((_props: TToken) => string | undefined) | undefined>(brandTheme, func)
    if (typeof themeFunc === 'function') {
      const returnValue = themeFunc(props)
      if (typeof returnValue === 'string') {
        return returnValue
      }
    }
  }
  if (customTheme == null || customTheme === false) {
    return undefined
  }
  return customTheme
}

export default useThemeContext
