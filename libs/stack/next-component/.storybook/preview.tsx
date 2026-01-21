import type { Preview } from '@storybook/react-webpack5'
import { NuqsAdapter } from 'nuqs/adapters/next'
import { Suspense } from 'react'
import { OverlayProvider } from 'react-aria'
import BaseThemeProvider from '../src/theme'
import '../src/tailwind.css' // replace with the name of your tailwind css file

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: {
      options: {
        light: {
          name: 'light',
          value: '#ffffff',
        },

        dark: {
          name: 'dark',
          value: '#000000',
        },
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <>
          <style>
            {`
              #root {
                padding: 0 !important;
              }
            `}
          </style>
          <BaseThemeProvider>
            <OverlayProvider>
              <Suspense fallback={<div>Loading... </div>}>
                <NuqsAdapter>
                  <Story />
                </NuqsAdapter>
              </Suspense>
            </OverlayProvider>
          </BaseThemeProvider>
        </>
      )
    },
  ],

  initialGlobals: {
    backgrounds: {
      value: 'light',
    },
  },
}

export default preview
