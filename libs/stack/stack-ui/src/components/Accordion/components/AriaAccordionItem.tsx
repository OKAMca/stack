import type { AccordionItemAria } from '@react-aria/accordion'
import { useAccordionItem } from '@react-aria/accordion'
import { useRef } from 'react'
import { FocusRing, FocusScope } from 'react-aria'
import { useAccordionCtx } from '../../../providers/Accordion'
import AccordionTransition from '../../../transitions/AccordionTransition'
import Box from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import type { TAriaAccordionItemProps } from '../interface'

const AriaAccordionItem = (props: TAriaAccordionItemProps) => {
  const { item, themeName, tokens, customTheme } = props
  const { props: itemProps, rendered, key } = item
  const { icon, title, onClick } = itemProps ?? {}

  const ref = useRef(null)
  const { state, TransitionAnimation = AccordionTransition } = useAccordionCtx()

  const {
    buttonProps: { onClick: onButtonClick, ...buttonProps },
    regionProps,
  } = useAccordionItem(props, state, ref)

  const isOpen = state.expandedKeys.has(key)
  const accordionTokens = { ...tokens, isOpen }

  const handlePress: (typeof buttonProps)['onPointerDown'] = (e) => {
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
      <FocusRing focusRingClass="has-focus-ring">
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
      </FocusRing>
      <TransitionAnimation
        isVisible={isOpen}
        themeName={`${themeName}.region`}
        {...regionProps}
        tokens={accordionTokens}
      >
        <Box themeName={`${themeName}.content`} tokens={accordionTokens}>
          <FocusScope autoFocus contain restoreFocus>
            {rendered}
          </FocusScope>
        </Box>
      </TransitionAnimation>
    </Box>
  )
}

export default AriaAccordionItem
