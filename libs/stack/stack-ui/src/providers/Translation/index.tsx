'use client'

import type { TTranslateFunc, TTranslationContext, TTranslationProps } from './interface'
import { createCtx } from '@okam/core-lib'
import { get } from 'radashi'
import { useCallback, useMemo } from 'react'
import { log } from '../../logger'

const translationCtx = createCtx<TTranslationContext>()
export const useTranslation = translationCtx[0]
const TranslationProvider = translationCtx[1]

export function TranslationContextProvider({
  useTranslationFunc,
  children,
  namespace = 'common',
  translateFunctionName = 't',
}: TTranslationProps) {
  const translate = useTranslationFunc(namespace)

  const fallbackFn = (key: string, _obj?: Record<string, unknown>) => {
    log(`translation function not found: translateFunctionName: ${translateFunctionName}`, 'warn', {
      key,
      obj: _obj,
      namespace,
    })
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
