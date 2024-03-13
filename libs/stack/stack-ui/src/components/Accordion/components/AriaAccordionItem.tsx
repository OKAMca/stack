import { useAccordionItem } from '@react-aria/accordion'
import { useRef } from 'react'
import type { PointerEvent } from 'react'
import { FocusScope } from 'react-aria'
import { useAccordionCtx } from '../../../providers/Accordion'
import AccordionTransition from '../../../transitions/AccordionTransition'
import Box from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import type { TAriaAccordionItemProps } from '../interface'

const AriaAccordionItem = (props: TAriaAccordionItemProps) => {
  const { item, themeName, tokens, customTheme } = props
  const { props: itemProps, rendered } = item
  const { icon, title, onClick } = itemProps ?? {}

  const ref = useRef(null)
  const { state, TransitionAnimation = AccordionTransition } = useAccordionCtx()

  const {
    buttonProps: { onClick: onButtonClick, ...buttonProps },
    regionProps,
  } = useAccordionItem(props, state, ref)
  const isOpen = state.selectionManager.isSelected(item.key)
  const accordionTokens = { ...tokens, isOpen }

  const handlePress = (e: PointerEvent<HTMLElement>) => {
    state.selectionManager.select(item.key)
    if (onClick) onClick?.(isOpen)
    buttonProps.onPointerDown?.(e)
  }

  const updatedButtonProps: typeof buttonProps = {
    ...buttonProps,
    onPointerDown: handlePress,
  }

  return (
    <Box themeName={`${themeName}.container`} tokens={accordionTokens} customTheme={customTheme}>
      <ButtonWithForwardRef
        ref={ref}
        themeName={`${themeName}.button`}
        tokens={accordionTokens}
        {...updatedButtonProps}
      >
        <Box themeName={`${themeName}.title`} tokens={accordionTokens}>
          {title}
        </Box>
        <Box themeName={`${themeName}.icon`} tokens={accordionTokens}>
          <Icon icon={icon ?? 'ArrowDown'} />
        </Box>
      </ButtonWithForwardRef>
      <TransitionAnimation
        isVisible={isOpen}
        themeName={`${themeName}.region`}
        {...regionProps}
        tokens={accordionTokens}
      >
        <Box themeName={`${themeName}.content`} tokens={accordionTokens}>
          <FocusScope contain autoFocus restoreFocus>
            {rendered}
          </FocusScope>
        </Box>
      </TransitionAnimation>
    </Box>
  )
}

export default AriaAccordionItem
