'use client'

import type { TSidePanelContext, TSidePanelProviderProps } from './interface'
import { createCtx } from '@okam/core-lib'
import { useMemo, useRef } from 'react'
import { useOverlayTriggerState } from 'react-stately'
import useLabelledOverlay from '../../hooks/useLabelledOverlay'

const [useSidePanel, SidePanelProvider] = createCtx<TSidePanelContext>()

export { useSidePanel }

export function SidePanelContextProvider(props: TSidePanelProviderProps) {
  const {
    children,
    defaultSelectedKey,
    onOpenCallback,
    onCloseCallback,
    defaultIsOpen: legacyDefaultOpen = false,
    onOpenChange,
    isOpen: isOpenProp,
    defaultOpen: defaultOpenProp,
    type = 'dialog',
  } = props

  const defaultOpen = defaultOpenProp ?? legacyDefaultOpen

  const openButtonRef = useRef(null)
  const closeButtonRef = useRef(null)

  const overlayState = useOverlayTriggerState({
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange(isOpen) {
      onOpenChange?.(isOpen)
      if (!isOpen) {
        onCloseCallback?.()
        return
      }
      onOpenCallback?.()
    },
  })

  const { triggerProps, overlayProps, labelProps } = useLabelledOverlay({ type }, overlayState)

  const value = useMemo<TSidePanelContext>(
    () => ({
      labelProps,
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
    [labelProps, overlayProps, defaultSelectedKey, overlayState, triggerProps],
  )

  return <SidePanelProvider value={value}>{children}</SidePanelProvider>
}
