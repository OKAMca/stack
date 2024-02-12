import { useTab } from '@react-aria/tabs'
import React from 'react'
import { ButtonWithForwardRef } from '../../../Button'
import type { TTab } from '../../interface'

function Tab({ item, state }: TTab) {
  const { key, rendered } = item
  const ref = React.useRef(null)
  const { tabProps } = useTab({ key }, state, ref)
  const isDisabled = state.disabledKeys.has(key)

  return (
    <ButtonWithForwardRef {...tabProps} ref={ref} disabled={isDisabled}>
      {rendered}
    </ButtonWithForwardRef>
  )
}

export default Tab
