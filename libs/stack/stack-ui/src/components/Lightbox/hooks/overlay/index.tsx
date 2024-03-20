'use client'

import { useOverlayTriggerState } from '@react-stately/overlays'
import React, { useEffect } from 'react'
import type { PressEvent } from 'react-aria'
import { useOverlayTrigger } from 'react-aria'
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

  const {
    triggerProps: { onPress: onOpenPressStart, ...restOfOpenButtonProps },
  } = useOverlayTrigger(
    {
      type: 'dialog',
    },
    state,
    openButtonRef,
  )

  const openButtonProps = {
    ...restOfOpenButtonProps,
    onClick: (e: PressEvent) => {
      handleClose()
      onOpenPressStart?.(e)
    },
  }

  const {
    triggerProps: { onPress: onClosePressStart, ...restOfCloseButtonProps },
  } = useOverlayTrigger(
    {
      type: 'dialog',
    },
    state,
    closeButtonRef,
  )

  const closeButtonProps = {
    ...restOfCloseButtonProps,
    onClick: (e: PressEvent) => {
      handleClose()
      onClosePressStart?.(e)
    },
  }

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
