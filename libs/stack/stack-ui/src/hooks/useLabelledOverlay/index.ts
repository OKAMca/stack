'use client'

import type { RefObject } from 'react'
import type { OverlayTriggerProps } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'
import type { TLabelledOverlayAria } from './interface'
import { useSlotId } from '@react-aria/utils'
import { useOverlayTrigger } from 'react-aria'

/**
 * Wrapper for react aria `useOverlayTrigger` that adds label props and reformats press events to work with `TButtonProps`
 */
function useLabelledOverlay(
  props: OverlayTriggerProps,
  state: OverlayTriggerState,
  ref?: RefObject<Element | null>,
): TLabelledOverlayAria {
  const { type = 'dialog' } = props
  const {
    triggerProps: { onPress, preventFocusOnPress, ...triggerProps },
    overlayProps,
  } = useOverlayTrigger({ type }, state, ref)

  const labelId = useSlotId()

  const updatedTriggerProps = {
    'aria-labelledby': labelId,
    'handlePress': onPress,
    ...triggerProps,
  }

  return {
    openTriggerProps: updatedTriggerProps,
    triggerProps: updatedTriggerProps,
    labelProps: { id: labelId },
    overlayProps: { ...overlayProps, 'aria-labelledby': labelId },
  }
}

export default useLabelledOverlay
