'use client'

import { createCtx } from '@okam/core-lib'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import type { TDraftModeContext, TDraftModeProviderProps, TDraftModeStatus } from './interface'
import { handleDraftMode } from './utils/handleDraftMode'

export const [useDraftMode, DraftModeProvider] = createCtx<TDraftModeContext>()

export function DraftModeContextProvider(props: TDraftModeProviderProps) {
  const { children, defaultEnabled, cookieDuration: defaultCookieDuration = 1, mutationOptions } = props
  const [isEnabled, setEnabled] = useState(defaultEnabled ?? false)
  const [cookieDuration, setCookieDuration] = useState(defaultCookieDuration) // Default to 1 day
  const router = useRouter()

  const mutation = useMutation({
    mutationKey: ['draftMode'] as const,
    mutationFn: async (params: TDraftModeStatus) => {
      const response = await handleDraftMode({
        enable: params.isEnabled,
        cookieDuration: params.cookieDuration ?? cookieDuration,
      })
      return response
    },
    onSuccess: (response) => {
      router.refresh()
      setEnabled(response.isEnabled)
    },
    ...mutationOptions,
  })

  const value = useMemo(
    () => ({
      ...mutation,
      isEnabled,
      setEnabled,
      cookieDuration,
      setCookieDuration,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isEnabled, cookieDuration, mutation.isPending, mutation.isError, mutation.isSuccess, mutation.status],
  )

  return <DraftModeProvider value={value}>{children}</DraftModeProvider>
}
