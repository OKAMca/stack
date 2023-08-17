'use client'

import { get } from 'radash'
import type { TCustomTheme, TToken } from './interface'
import { useTheme } from './index'

const useThemeContext = (func?: string | null, props: TToken = {}, customTheme: TCustomTheme = null) => {
  const theme = useTheme()
  if (theme != null && func != null) {
    const { brandTheme } = theme
    const themeFunc = get(brandTheme, func)
    if (typeof themeFunc === 'function') {
      const returnValue = themeFunc?.(props)
      if (typeof returnValue === 'string') {
        return returnValue
      }
    }
  }
  if (!customTheme) {
    return undefined
  }
  return customTheme
}

export default useThemeContext
