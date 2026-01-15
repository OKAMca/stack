'use client'

import { createThemeProvider, makeTheme } from '@okam/stack-ui'
import React from 'react'
import { adminBarTheme } from './AdminBar'
import buttonTheme from './Button'
import filterTheme from './Filter'
import typography from './Typography'

// eslint-disable-next-line @typescript-eslint/naming-convention
const BaseTheme = makeTheme({
  filter: filterTheme,
  button: buttonTheme,
  typography,
  adminBar: adminBarTheme,
})

export default React.memo(createThemeProvider(BaseTheme))
