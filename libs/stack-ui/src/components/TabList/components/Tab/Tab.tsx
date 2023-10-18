import { useTab } from '@react-aria/tabs'
import React from 'react'
import { ButtonWithForwardRef } from '../../../Button'
import type { TTab } from '../../interface'

function Tab({ item, state }: TTab) {
  const { key, rendered } = item
  const ref = React.useRef(null)
  const { tabProps } = useTab({ key }, state, ref)
  const isSelected = state.selectedKey === key
  const isDisabled = state.disabledKeys.has(key)

  return (
    <ButtonWithForwardRef
      {...tabProps}
      ref={ref}
      buttonStyle={isSelected ? 'default' : 'outline'}
      disabled={isDisabled}
      tw="min-w-[4.25rem] lg:min-w-[6.875rem]"
    >
      {rendered}
    </ButtonWithForwardRef>
  )
}

export default Tab
