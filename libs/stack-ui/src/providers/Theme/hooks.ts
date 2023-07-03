import { get } from 'radash'
import type { TCustomTheme, TToken } from './interface'
import { useTheme } from '.'

const useThemeContext = (func?: string | null, props: TToken = {}, customTheme: TCustomTheme = null) => {
  const theme = useTheme()
  if (theme != null && func != null) {
    const { brandTheme } = theme
    const themeFunc = get(brandTheme, func)
    if (typeof themeFunc === 'function') {
      return themeFunc?.(props)
    }
  }
  return customTheme
}

export default useThemeContext
