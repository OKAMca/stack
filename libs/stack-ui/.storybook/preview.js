/** @type { import('@storybook/react').Preview } */

import '../src/tailwind.css'; // replace with the name of your tailwind css file
import React, { Suspense } from 'react'
import { I18nProvider, OverlayProvider } from 'react-aria'
import { useGlobals } from '@storybook/client-api'
import BaseThemeProvider from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff'
      },
      {
        name: 'dark',
        value: '#000000'
      }
    ]
  },
}

export const decorators = [
  (Story, context) => {
    const [{ locale }] = useGlobals()

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
            <I18nProvider locale={locale}>
              <OverlayProvider>
                <Suspense fallback={<div>Loading... </div>}>
                  <Story />
                </Suspense>
              </OverlayProvider>
            </I18nProvider>
          </BaseThemeProvider>
      </>
    )
  },
]
