'use client'

/**
 * Option - react-aria ListBox option component
 *
 * Uses React.Children API (Children.count, Children.toArray) to detect label/description pattern,
 * and cloneElement to inject accessibility props from useOption.
 *
 * @see https://react-spectrum.adobe.com/react-aria/useListBox.html#option
 * @see docs/ADR/005_react-stately-eslint-exceptions.md
 */

import type { TToken } from '../../../providers/Theme/interface'
import type { TOptionProps } from './interface'
import { Children, cloneElement, isValidElement, useRef } from 'react'
import { FocusRing, mergeProps, useOption } from 'react-aria'
import { mergeDefaultComponentProps } from '../../../helpers/mergeDefaultComponentProps'
import { Box, BoxWithForwardRef } from '../../Box'
import { Anchor } from '../../Button'

function Option<I extends object = object, T extends TToken = TToken>({
  item,
  state,
  ...props
}: TOptionProps<I, T>) {
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

  const renderChildren = async () => {
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
            <Box themeName={`${themeName}.label`} tokens={optionTokens}>
              {cloneElement(label, labelProps)}
            </Box>
          )}
          {isDescriptionValid && (
            <Box themeName={`${themeName}.description`} tokens={optionTokens}>
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
