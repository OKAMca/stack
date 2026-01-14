'use client'

import { createCtx } from '@okam/core-lib'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import type { TDraftModeContext, TDraftModeProviderProps, TDraftModeStatus } from './interface'
import { handleDraftMode } from './utils/handleDraftMode'

export const [useDraftMode, DraftModeProvider] = createCtx<TDraftModeContext>()

export function DraftModeContextProvider(props: TDraftModeProviderProps) {
  const { children, defaultEnabled, cookieDuration: defaultCookieDuration = 1, queryOptions, mutationOptions } = props
  const [isEnabled, setEnabled] = useState(defaultEnabled ?? false)
  const [cookieDuration, setCookieDuration] = useState(defaultCookieDuration) // Default to 1 day
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['draftMode'] as const,
    queryFn: async () => {
      const response = await handleDraftMode({ enable: isEnabled, cookieDuration })
      return response
    },
    enabled: false, // Only run via refetch or remove if initial fetch is needed once
    ...queryOptions,
  })

  // Sync state when data changes
  useEffect(() => {
    if (data) {
      setEnabled(data.isEnabled)
    }
  }, [data])

  const result = useMutation({
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
    () => ({ ...result, isEnabled, setEnabled, cookieDuration, setCookieDuration }),
    [isEnabled, cookieDuration, result],
  )

  return <DraftModeProvider value={value}>{children}</DraftModeProvider>
}
