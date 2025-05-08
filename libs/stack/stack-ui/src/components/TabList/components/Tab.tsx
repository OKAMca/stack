'use client'

import { useFocusRing } from '@react-aria/focus'
import { useTab } from '@react-aria/tabs'
import { useRef } from 'react'
import { mergeProps } from 'react-aria'
import { mergeDefaultComponentProps } from '../../../helpers/mergeDefaultComponentProps'
import type { TDefaultItemComponent } from '../../../types/react-stately'
import { BoxWithForwardRef } from '../../Box'
import type { TTabProps } from '../interface'

const Tab = <I extends TDefaultItemComponent>({ item, state, ...props }: TTabProps<I>) => {
  const { key, rendered } = item
  const { themeName = 'tabList.tab', tokens, ...rest } = mergeDefaultComponentProps(props, item.props)

  const ref = useRef(null)
  const { tabProps } = useTab({ key }, state, ref)
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ within: true, autoFocus: false })

  const isDisabled = state.selectionManager.isDisabled(key)
  const isSelected = state.selectionManager.isSelected(key)
  const isLink = state.selectionManager.isLink(key)

  const tabTokens = {
    ...tokens,
    isDisabled,
    isSelected,
    isLink,
    isFocused,
    isFocusVisible,
  }

  return (
    <BoxWithForwardRef {...mergeProps(rest, focusProps, tabProps)} themeName={themeName} tokens={tabTokens} ref={ref}>
      {rendered}
    </BoxWithForwardRef>
  )
}

export default Tab
