import { useRef } from 'react'
import { useTag, useFocusRing } from 'react-aria'
import type { TToken } from '../../../providers/Theme/interface'
import Box, { BoxWithForwardRef } from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Typography from '../../Typography'
import type { TTagProps } from '../interface'

const Tag = <Item, T = TToken>(props: TTagProps<Item, T>) => {
  const { item, state, themeName = 'tag', tokens, customTheme } = props
  const ref = useRef(null)
  const { focusProps, isFocusVisible } = useFocusRing({ within: true })
  const { rowProps, gridCellProps, isDisabled, isSelected, isPressed } = useTag(props, state, ref)
  console.log(isSelected, item.key)

  const tagTokens = { isSelected, isDisabled, isPressed, ...tokens }

  return (
    <ButtonWithForwardRef
      themeName={`${themeName}.wrapper`}
      tokens={tagTokens}
      customTheme={customTheme}
      ref={ref}
      {...rowProps}
      {...focusProps}
      data-focus-visible={isFocusVisible}
    >
      <Typography themeName={`${themeName}.container`} tokens={tagTokens} customTheme={customTheme} {...gridCellProps}>
        {item.rendered}
      </Typography>
    </ButtonWithForwardRef>
  )
}

export default Tag
