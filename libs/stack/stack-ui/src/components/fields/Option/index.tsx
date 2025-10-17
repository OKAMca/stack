'use client'

import { Children, cloneElement, isValidElement, useRef } from 'react'
import { FocusRing, mergeProps, useOption } from 'react-aria'
import { mergeDefaultComponentProps } from '../../../helpers/mergeDefaultComponentProps'
import type { TToken } from '../../../providers/Theme/interface'
import Box, { BoxWithForwardRef } from '../../Box'
import { Anchor } from '../../Button'
import type { TOptionProps } from './interface'

const Option = <I extends object = object, T extends TToken = TToken>({
  item,
  state,
  ...props
}: TOptionProps<I, T>) => {
  const { key, rendered, type } = item
  const {
    themeName = 'option',
    tokens,
    as = 'li',
    customTheme,
    linkElementType: LinkElement = Anchor,
    ...rest
  } = mergeDefaultComponentProps(props, item.props)

  const ref = useRef(null)
  const {
    optionProps,
    isFocused,
    isDisabled,
    isFocusVisible,
    isPressed,
    isSelected,
    allowsSelection,
    descriptionProps,
    labelProps,
    hasAction,
  } = useOption({ key }, state, ref)
  const isLink = state.selectionManager.isLink(key)
  const isSelectable = state.selectionManager.canSelectItem(key)

  const optionTokens = {
    ...tokens,
    type,
    isFocused,
    isDisabled,
    isFocusVisible,
    isPressed,
    isSelected,
    allowsSelection,
    hasAction,
    isLink,
    isSelectable,
  }

  const Component = isLink ? LinkElement : BoxWithForwardRef
  const elementType = isLink ? 'a' : as

  const renderChildren = () => {
    if (Children.count(rendered) > 1) {
      const [label, description] = Children.toArray(rendered)
      const isLabelValid = isValidElement(label)
      const isDescriptionValid = isValidElement(description)

      if (!isLabelValid && !isDescriptionValid) {
        return rendered
      }

      return (
        <>
          {isLabelValid && (
            <Box {...labelProps} themeName={`${themeName}.label`} tokens={optionTokens}>
              {cloneElement(label, labelProps)}
            </Box>
          )}
          {isDescriptionValid && (
            <Box {...descriptionProps} themeName={`${themeName}.description`} tokens={optionTokens}>
              {cloneElement(description, descriptionProps)}
            </Box>
          )}
        </>
      )
    }
    return rendered
  }

  return (
    <FocusRing focusRingClass="has-focus-ring">
      <Component
        as={elementType}
        {...mergeProps(rest, optionProps)}
        ref={ref}
        themeName={`${themeName}.option`}
        tokens={optionTokens}
        customTheme={customTheme}
      >
        {renderChildren()}
      </Component>
    </FocusRing>
  )
}

export default Option
