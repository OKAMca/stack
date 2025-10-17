import '../src/tailwind.css'
import type { Preview } from '@storybook/react'
import BaseThemeProvider from '../src/theme'

const preview: Preview = {
  decorators: [
    (Story) => (
      <BaseThemeProvider>
        <Story />
      </BaseThemeProvider>
    ),
  ],
}

export default preview
