/* eslint-disable @typescript-eslint/naming-convention */

'use client'

import { useSlotId } from '@react-aria/utils'
import type { RefObject } from 'react'
import type { OverlayTriggerProps } from 'react-aria'
import { useOverlayTrigger } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'

function useLabelledOverlay(props: OverlayTriggerProps, state: OverlayTriggerState, ref?: RefObject<Element>) {
  const { type = 'dialog' } = props
  const {
    triggerProps: { onPress, ...triggerProps },
    overlayProps,
  } = useOverlayTrigger({ type }, state, ref)

  const updatedTriggerProps = {
    handlePress: onPress,
    ...triggerProps,
  }

  const labelId = useSlotId()

  const openTriggerProps = {
    'aria-labelledby': labelId,
    ...updatedTriggerProps,
  }

  return {
    openTriggerProps,
    triggerProps: updatedTriggerProps,
    labelProps: { id: labelId },
    overlayProps: { ...overlayProps, 'aria-labelledby': labelId },
  }
}

export default useLabelledOverlay
