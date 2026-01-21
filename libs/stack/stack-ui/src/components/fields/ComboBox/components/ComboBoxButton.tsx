import type { PressEvent } from 'react-aria'
import type { TComboBoxButtonProps } from '../interface'
import { useCallback } from 'react'
import { ButtonWithForwardRef } from '../../../Button'

function ComboBoxButton({ ref, ...props }: TComboBoxButtonProps & { ref?: React.RefObject<HTMLButtonElement & HTMLAnchorElement | null> }) {
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
}
ComboBoxButton.displayName = 'ComboBoxButton'

export default ComboBoxButton
