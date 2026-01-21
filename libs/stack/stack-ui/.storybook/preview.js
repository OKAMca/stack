/** @type { import('@storybook/react-webpack5').Preview } */

import { Suspense, useEffect } from 'react'
import { I18nProvider, OverlayProvider } from 'react-aria'
import { FormProvider, useForm } from 'react-hook-form'
import { TranslationContextProvider } from '../src'
import { IsClientContextProvider } from '../src/providers/Client'
import BaseThemeProvider from '../src/theme'
import '../src/tailwind.css' // replace with the name of your tailwind css file

function getTranslationMock() {
  return {
    t: key => key,
    i18n: {
      language: 'en',
    },
  }
}

const preview = {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [{ value: 'light', title: 'Light' }, { value: 'dark', title: 'Dark' }],
      },
      dynamic: true,
      dynamicTitle: true,
    },
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
  decorators: [
    (Story, context) => {
      const locale = context?.globals?.locale || 'en'
      const theme = context?.globals?.theme || 'light'
      const bgColor = { light: 'bg-white', dark: 'bg-black' }[theme]
      const methods = useForm({
        defaultValues: context?.globals?.defaultValues || {},
      })
      useEffect(() => {
        document.body.classList.add(bgColor)
        document.body.classList.add(theme)
        return () => {
          document.body.classList.remove(bgColor)
          document.body.classList.remove(theme)
        }
      }, [bgColor, theme])
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
              <TranslationContextProvider useTranslationFunc={getTranslationMock}>
                <IsClientContextProvider>
                  <OverlayProvider>
                    <FormProvider {...methods}>
                      <Suspense fallback={<div>Loading... </div>}>
                        <Story />
                      </Suspense>
                    </FormProvider>
                  </OverlayProvider>
                </IsClientContextProvider>
              </TranslationContextProvider>
            </I18nProvider>
          </BaseThemeProvider>
        </>
      )
    },
  ],
}

export default preview
