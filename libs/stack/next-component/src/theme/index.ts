import { createThemeProvider, makeTheme } from '@okam/stack-ui'
import { memo } from 'react'
import linkTheme from './Link'

const baseTheme = makeTheme({
  link: linkTheme,
})

export default memo(createThemeProvider(baseTheme))
