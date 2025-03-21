'use client'

import { createCtx } from '@okam/core-lib'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import type { TDraftModeContext, TDraftModeProviderProps, TDraftModeStatus } from './interface'
import { handleDraftMode } from './utils/handleDraftMode'

export const [useDraftMode, DraftModeProvider] = createCtx<TDraftModeContext>()

export function DraftModeContextProvider(props: TDraftModeProviderProps) {
  const { children, defaultEnabled, cookieDuration: defaultCookieDuration } = props
  const [isEnabled, setEnabled] = useState(defaultEnabled ?? false)
  const [cookieDuration, setCookieDuration] = useState(defaultCookieDuration) // Default to 1 day
  const router = useRouter()

  useQuery({
    queryKey: [isEnabled, cookieDuration] as const,
    queryFn: async ({ queryKey }) => {
      const [enabled, duration] = queryKey
      const response = await handleDraftMode({ enable: enabled, cookieDuration: duration })
      setEnabled(response.isEnabled)
    },
  })

  const result = useMutation({
    mutationKey: [isEnabled, cookieDuration] as const,
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
  })

  const value = useMemo(
    () => ({ ...result, isEnabled, setEnabled, cookieDuration, setCookieDuration }),
    [isEnabled, cookieDuration, result],
  )

  return <DraftModeProvider value={value}>{children}</DraftModeProvider>
}
