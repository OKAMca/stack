/** @type { import('@storybook/react').Preview } */

import '../src/tailwind.css' // replace with the name of your tailwind css file
import React, { Suspense } from 'react'
import { I18nProvider, OverlayProvider } from 'react-aria'
import BaseThemeProvider from '../src/theme'
import { IsClientContextProvider } from '../src/providers/Client'
import { FormProvider, useForm } from 'react-hook-form'
import { TranslationContextProvider } from '../src'

const useTranslationFunc = () => {
  return {
    t: (key) => key,
    i18n: {
      language: 'en',
    },
  }
}

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
    const methods = useForm({
      defaultValues: context?.globals?.defaultValues || {},
    })
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
          <TranslationContextProvider useTranslationFunc={useTranslationFunc}>
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
]
