'use client'

import { createCtx } from '@okam/core-lib'
import { useMemo } from 'react'
import useOverlayHook from '../../components/Lightbox/hooks/overlay'
import type { TSidePanelContext, TSidePanelProviderProps } from './interface'

const [useSidePanel, SidePanelProvider] = createCtx<TSidePanelContext>()

export { useSidePanel }

export function SidePanelContextProvider({ children, defaultSelectedKey }: TSidePanelProviderProps) {
  const {
    state: overlayState,
    closeButtonProps,
    closeButtonRef,
    openButtonProps,
    openButtonRef,
  } = useOverlayHook(false)

  const value = useMemo<TSidePanelContext>(
    () => ({
      defaultSelectedKey,
      overlayState,
      buttonProps: {
        closeButtonProps,
        closeButtonRef,
        openButtonProps,
        openButtonRef,
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [overlayState, defaultSelectedKey, closeButtonProps, openButtonProps],
  )

  return <SidePanelProvider value={value}>{children}</SidePanelProvider>
}
