'use client'

import { createCtx } from '@okam/core-lib'
import { get } from 'radash'
import { useCallback, useMemo } from 'react'
import type { TTranslateFunc, TTranslationContext, TTranslationProps } from './interface'

const [useTranslation, TranslationProvider] = createCtx<TTranslationContext>()

export { useTranslation }

export function TranslationContextProvider({
  useTranslationFunc,
  children,
  namespace = 'common',
  translateFunctionName = 't',
}: TTranslationProps) {
  const translate = useTranslationFunc(namespace)

  const fallbackFn = (key: string, _obj?: Record<string, unknown>) => {
    console.warn(
      `STACK-UI/Translation --> translation function not found: translateFunctionName: ${translateFunctionName}`,
    )
    return key
  }

  const t = get<TTranslateFunc>(translate, translateFunctionName, fallbackFn)

  const translationFunc = useCallback(
    (key: string, obj?: Record<string, unknown>) => {
      if (obj == null) {
        return t(key)
      }

      return t(key, obj)
    },
    [t],
  )

  const value = useMemo<TTranslationContext>(
    () => ({
      t: translationFunc,
    }),
    [translationFunc],
  )

  return <TranslationProvider value={value}>{children}</TranslationProvider>
}
