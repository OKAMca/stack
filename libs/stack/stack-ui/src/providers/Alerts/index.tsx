'use client'

import { createCtxNullable } from '@okam/core-lib'
import { useMemo } from 'react'
import type { TAlertsControllerContext, TAlertsControllerProviderProps } from './interface'

export const [useAlertsController, AlertsControllerProvider] = createCtxNullable<TAlertsControllerContext>()

export function AlertsControllerContextProvider(props: TAlertsControllerProviderProps) {
  const { controller, children } = props

  const value = useMemo<TAlertsControllerContext>(() => ({ controller }), [controller])

  return <AlertsControllerProvider value={value}>{children}</AlertsControllerProvider>
}
