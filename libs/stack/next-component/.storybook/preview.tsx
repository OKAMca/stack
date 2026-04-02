import type { Preview } from '@storybook/react'
import { NuqsAdapter } from 'nuqs/adapters/next'
import { isString } from 'radashi'
import { Suspense } from 'react'
import { I18nProvider, OverlayProvider } from 'react-aria'
import BaseThemeProvider from '../src/theme'
import '../src/tailwind.css' // replace with the name of your tailwind css file

const preview: Preview = {
  globalTypes: {
    locale: {
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [{ value: 'en', title: 'English' }, { value: 'fr', title: 'Français' }],
      },
      dynamic: true,
      dynamicTitle: true,
    },
  },
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
    (Story, context) => {
      const { locale: maybeLocale } = context?.globals ?? {}
      const locale = isString(maybeLocale) ? maybeLocale : 'en'
      return (
        <>
          <style>
            {`
              #root {
                padding: 0 !important;
              }
            `}
          </style>
          <I18nProvider locale={locale}>
            <BaseThemeProvider>
              <OverlayProvider>
                <Suspense fallback={<div>Loading... </div>}>
                  <NuqsAdapter>
                    <Story />
                  </NuqsAdapter>
                </Suspense>
              </OverlayProvider>
            </BaseThemeProvider>
          </I18nProvider>
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
