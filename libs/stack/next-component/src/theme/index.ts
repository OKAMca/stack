'use client'

import { createThemeProvider, makeTheme } from '@okam/stack-ui'
import { memo } from 'react'
import { adminBarTheme } from './AdminBar'
import buttonTheme from './Button'
import filterTheme from './Filter'
import typography from './Typography'

const BaseTheme = makeTheme({
  filter: filterTheme,
  button: buttonTheme,
  typography,
  adminBar: adminBarTheme,
})

export default memo(createThemeProvider(BaseTheme))
