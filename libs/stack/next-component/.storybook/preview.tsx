import type { Preview } from '@storybook/react'
import '../src/tailwind.css' // replace with the name of your tailwind css file
import { NuqsAdapter } from 'nuqs/adapters/next'
import { Suspense } from 'react'
import { OverlayProvider } from 'react-aria'
import BaseThemeProvider from '../src/theme'

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      console.log(context)
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
}

export default preview
