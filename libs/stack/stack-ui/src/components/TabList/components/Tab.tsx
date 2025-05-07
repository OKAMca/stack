import { useTab } from '@react-aria/tabs'
import { useRef } from 'react'
import { FocusRing } from 'react-aria'
import { mergeDefaultComponentProps } from '../../../helpers/mergeDefaultComponentProps'
import type { TToken } from '../../../providers/Theme/interface'
import { BoxWithForwardRef } from '../../Box'
import Button from '../../Button'
import type { TTabProps } from '../interface'

const Tab = <I extends object, T extends TToken = TToken>({ item, state, ...props }: TTabProps<I, T>) => {
  const { key, rendered } = item
  const {
    themeName = 'tabList.tab',
    tokens,
    customTheme,
    as: Component = Button,
    ...rest
  } = mergeDefaultComponentProps(props, item.props)

  const ref = useRef(null)
  const { tabProps } = useTab({ key }, state, ref)
  const isDisabled = state.selectionManager.isDisabled(key)
  const isSelected = state.selectionManager.isSelected(key)
  const isLink = state.selectionManager.isLink(key)

  const tabTokens = {
    ...tokens,
    isDisabled,
    isSelected,
    isLink,
  }

  return (
    <FocusRing focusRingClass="has-focus-ring" within>
      <BoxWithForwardRef themeName={`${themeName}.container`} tokens={tabTokens} customTheme={customTheme} ref={ref}>
        <Component {...tabProps} {...rest} themeName={`${themeName}.button`} tokens={tabTokens}>
          {rendered}
        </Component>
      </BoxWithForwardRef>
    </FocusRing>
  )
}

export default Tab
