import { Children, cloneElement, isValidElement, useRef } from 'react'
import { mergeProps, useOption } from 'react-aria'
import { mergeDefaultComponentProps } from '../../../helpers/mergeDefaultComponentProps'
import Box, { BoxWithForwardRef } from '../../Box'
import type { TOptionProps } from './interface'

const Option = ({ item, state, ...props }: TOptionProps) => {
  const { key, rendered } = item
  const {
    themeName = 'option',
    tokens,
    as = 'li',
    customTheme,
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

  const optionTokens = {
    ...tokens,
    isFocused,
    isDisabled,
    isFocusVisible,
    isPressed,
    isSelected,
    allowsSelection,
    hasAction,
  }

  const renderChildren = () => {
    if (Children.count(rendered) > 1) {
      const [label, description] = Children.toArray(rendered)
      return (
        <BoxWithForwardRef as={as} {...optionProps} ref={ref} themeName={`${themeName}.option`} tokens={optionTokens}>
          {isValidElement(label) && (
            <Box {...labelProps} themeName={`${themeName}.label`} tokens={optionTokens}>
              {cloneElement(label, labelProps)}
            </Box>
          )}
          {isValidElement(description) && (
            <Box {...descriptionProps} themeName={`${themeName}.description`} tokens={optionTokens}>
              {cloneElement(description, descriptionProps)}
            </Box>
          )}
        </BoxWithForwardRef>
      )
    }
    return rendered
  }

  return (
    <BoxWithForwardRef
      as={as}
      {...mergeProps(rest, optionProps)}
      ref={ref}
      themeName={`${themeName}.option`}
      tokens={optionTokens}
      customTheme={customTheme}
    >
      {renderChildren()}
    </BoxWithForwardRef>
  )
}

export default Option
