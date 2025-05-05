'use client'

import { useRef } from 'react'
import { FocusRing, useTag } from 'react-aria'
import type { TToken } from '../../../providers/Theme/interface'
import Box, { BoxWithForwardRef } from '../../Box'
import Button from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import type { TTagProps } from '../interface'

const Tag = <Item extends object, T = TToken>(props: TTagProps<Item, T>) => {
  const { themeName, tokens, customTheme, as, item, state, ...rest } = props
  const { removeButtonProps: removeButtonPropsItem, href } = item.props ?? {}
  const ref = useRef(null)
  const {
    rowProps,
    gridCellProps,
    removeButtonProps: removeButtonPropsAria,
    allowsRemoving,
    isDisabled,
    isFocused,
    isPressed,
    isSelected,
  } = useTag(props, state, ref)

  const tagTokens = {
    ...tokens,
    isDisabled,
    isFocused,
    isPressed,
    isSelected,
    isLink: !!href,
  }

  const removeButtonProps: TButtonProps = {
    ...removeButtonPropsItem,
    ...removeButtonPropsAria,
    handlePress: (e) => {
      removeButtonPropsItem?.handlePress?.(e)
      removeButtonPropsAria?.onPress?.(e)
    },
  }

  return (
    <FocusRing focusRingClass="has-focus-ring within">
      <BoxWithForwardRef
        {...rest}
        {...rowProps}
        ref={ref}
        themeName={`${themeName}.wrapper`}
        tokens={tagTokens}
        customTheme={customTheme}
      >
        <Box themeName={`${themeName}.container`} tokens={tagTokens} {...gridCellProps}>
          <Box themeName={`${themeName}.item`} tokens={tagTokens}>
            {item.rendered}
          </Box>
          {allowsRemoving && removeButtonPropsItem && (
            <Button themeName={`${themeName}.removeButton`} tokens={tagTokens} {...removeButtonProps} />
          )}
        </Box>
      </BoxWithForwardRef>
    </FocusRing>
  )
}

export default Tag
