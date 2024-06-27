'use client'

import { createCtxNullable } from '@okam/core-lib'
import { useMemo } from 'react'
import type { TSwiperControllerContext, TSwiperControllerProviderProps } from './interface'

export const [useSwiperController, SwiperControllerProvider] = createCtxNullable<TSwiperControllerContext>()

export function SwiperControllerContextProvider(props: TSwiperControllerProviderProps) {
  const { controller, children } = props

  const value = useMemo<TSwiperControllerContext>(() => ({ controller }), [controller])

  return <SwiperControllerProvider value={value}>{children}</SwiperControllerProvider>
}
