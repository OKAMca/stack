import { useAccordionItem } from '@react-aria/accordion'
import { useRef } from 'react'
import { FocusRing, FocusScope } from 'react-aria'
import { useUpdateEffect } from 'react-use'
import { useAccordionCtx } from '../../../providers/Accordion'
import AccordionTransition from '../../../transitions/AccordionTransition'
import Box from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import Icon from '../../Icon'
import type { TAriaAccordionItemProps } from '../interface'

const AriaAccordionItem = (props: TAriaAccordionItemProps) => {
  const { item, themeName, tokens, customTheme } = props
  const { props: itemProps, rendered, key } = item
  const { icon, title, onOpenChange } = itemProps ?? {}

  const ref = useRef(null)
  const { state, TransitionAnimation = AccordionTransition } = useAccordionCtx()

  const {
    buttonProps: { onClick: onButtonClick, onKeyDown, onPointerDown, ...buttonProps },
    regionProps,
  } = useAccordionItem(props, state, ref)

  const isOpen = state.selectionManager.selectedKeys.has(key)

  const accordionTokens = { ...tokens, isOpen }

  const handlePress: TButtonProps['handlePress'] = (e) => {
    e.continuePropagation()
    state.selectionManager.select(item.key)
    state.toggleKey(item.key)
  }

  useUpdateEffect(() => {
    onOpenChange?.(isOpen)
  }, [isOpen])

  return (
    <Box themeName={`${themeName}.container`} tokens={accordionTokens} customTheme={customTheme}>
      <FocusRing focusRingClass="has-focus-ring">
        <ButtonWithForwardRef
          {...buttonProps}
          handlePress={handlePress}
          ref={ref}
          themeName={`${themeName}.button`}
          tokens={accordionTokens}
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
          <FocusScope autoFocus>{rendered}</FocusScope>
        </Box>
      </TransitionAnimation>
    </Box>
  )
}

export default AriaAccordionItem
