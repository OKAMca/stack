'use client'

import { useOverlayTriggerState } from '@react-stately/overlays'
import React, { useEffect } from 'react'
import { useButton } from 'react-aria'
import type { TOnCloseCallback, TOnOpenCallback } from './interface'

const useOverlayHook = (isOpen?: boolean, onOpenCallBack?: TOnOpenCallback, onCloseCallBack?: TOnCloseCallback) => {
  const state = useOverlayTriggerState({
    defaultOpen: isOpen,
    onOpenChange: (e) => onOpenCallBack?.(e),
  })
  const openButtonRef = React.useRef(null)
  const closeButtonRef = React.useRef(null)

  useEffect(() => {
    if (isOpen) {
      state.open()
      return
    }
    state.close()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleOpen = () => {
    state.open()
  }

  const handleClose = () => {
    state.close()
    onCloseCallBack?.()
  }

  const { buttonProps: openButtonProps } = useButton(
    {
      elementType: 'div',
      onPress: handleOpen,
    },
    openButtonRef,
  )

  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: handleClose,
    },
    closeButtonRef,
  )

  return {
    state,
    openButtonProps,
    closeButtonProps,
    handleOpen,
    handleClose,
    openButtonRef,
    closeButtonRef,
  }
}

export default useOverlayHook
