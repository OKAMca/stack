import type { PressEvent } from '@react-types/shared'
import { forwardRef, useCallback } from 'react'
import { ButtonWithForwardRef } from '../../../Button'
import type { TComboBoxButtonProps } from '../interface'

const ComboBoxButton = forwardRef<HTMLButtonElement & HTMLAnchorElement, TComboBoxButtonProps>((props, ref) => {
  const { state, handlePress: handlePressProp, ...rest } = props

  const handlePress = useCallback(
    (e: PressEvent) => {
      state.setInputValue('')
      state.selectionManager.clearSelection()
      handlePressProp?.(e)
    },
    [handlePressProp, state],
  )

  return <ButtonWithForwardRef {...rest} ref={ref} handlePress={handlePress} />
})
ComboBoxButton.displayName = 'ComboBoxButton'

export default ComboBoxButton
