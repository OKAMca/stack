'use client'

import { useSlotId } from '@react-aria/utils'
import { useOverlayTrigger } from 'react-aria'
import type { OverlayTriggerProps } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'

function useOverlayHook(props: OverlayTriggerProps, state: OverlayTriggerState) {
  const { type = 'dialog' } = props
  const {
    triggerProps: { onPress, ...triggerProps },
    overlayProps,
  } = useOverlayTrigger({ type }, state)

  const updatedTriggerProps = {
    handlePress: onPress,
    ...triggerProps,
  }

  const labelId = useSlotId()

  return {
    triggerProps: updatedTriggerProps,
    labelProps: { id: labelId },
    overlayProps: { ...overlayProps, 'aria-labelledby': labelId },
  }
}

export default useOverlayHook
