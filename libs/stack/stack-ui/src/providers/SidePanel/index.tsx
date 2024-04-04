'use client'

import { createCtx } from '@okam/core-lib'
import { useMemo, useRef } from 'react'
import { useOverlayTriggerState } from 'react-stately'
import useOverlayHook from '../../components/Lightbox/hooks/overlay'
import type { TSidePanelContext, TSidePanelProviderProps } from './interface'

const [useSidePanel, SidePanelProvider] = createCtx<TSidePanelContext>()

export { useSidePanel }

export function SidePanelContextProvider(props: TSidePanelProviderProps) {
  const {
    children,
    defaultSelectedKey,
    onOpenCallback,
    onCloseCallback,
    defaultIsOpen = false,
    type = 'dialog',
  } = props

  const openButtonRef = useRef(null)
  const closeButtonRef = useRef(null)

  const overlayState = useOverlayTriggerState({
    defaultOpen: defaultIsOpen,
    onOpenChange(isOpen) {
      if (!isOpen) {
        onCloseCallback?.()
        return
      }
      onOpenCallback?.()
    },
  })

  const { triggerProps, overlayProps } = useOverlayHook({ type }, overlayState)

  const value = useMemo<TSidePanelContext>(
    () => ({
      overlayProps,
      defaultSelectedKey,
      overlayState,
      buttonProps: {
        closeButtonProps: triggerProps,
        closeButtonRef,
        openButtonProps: triggerProps,
        openButtonRef,
      },
    }),
    [overlayState, defaultSelectedKey, triggerProps, overlayProps],
  )

  return <SidePanelProvider value={value}>{children}</SidePanelProvider>
}
