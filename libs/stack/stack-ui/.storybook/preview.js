/** @type { import('@storybook/react').Preview } */

import '../src/tailwind.css' // replace with the name of your tailwind css file
import React, { Suspense } from 'react'
import { I18nProvider, OverlayProvider } from 'react-aria'
import BaseThemeProvider from '../src/theme'
import { IsClientContextProvider } from '../src/providers/Client'
import { useGlobals } from 'storybook/internal/preview-api'

export const parameters = {
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
}

export const decorators = [
  (Story, context) => {
    const locale = context?.globals?.locale || 'en'
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
            <IsClientContextProvider>
              <OverlayProvider>
                <Suspense fallback={<div>Loading... </div>}>
                  <Story />
                </Suspense>
              </OverlayProvider>
            </IsClientContextProvider>
          </I18nProvider>
        </BaseThemeProvider>
      </>
    )
  },
]
