'use client'

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
  const { item, tokens, customTheme } = props
  const { props: itemProps, rendered, key } = item
  const { icon, title, onOpenChange, tokens: itemTokens, themeName: itemThemeName } = itemProps ?? {}
  const { themeName = itemThemeName } = props

  const ref = useRef(null)
  const { state, TransitionAnimation = AccordionTransition } = useAccordionCtx()

  const { buttonProps: rawButtonProps, regionProps } = useAccordionItem(props, state, ref)
  // Filter preventFocusOnPress to prevent React 19 unknown prop warning
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    onClick: onButtonClick,
    onKeyDown,
    onPointerDown,
    preventFocusOnPress,
    ...buttonProps
  } = rawButtonProps as typeof rawButtonProps & {
    preventFocusOnPress?: unknown
  }

  const isOpen = state.selectionManager.selectedKeys.has(key)

  const accordionItemTokens = { ...tokens, isOpen, ...itemTokens }

  const handlePress: TButtonProps['handlePress'] = (e) => {
    e.continuePropagation()
    state.selectionManager.select(item.key)
    state.toggleKey(item.key)
  }

  useUpdateEffect(() => {
    onOpenChange?.(isOpen)
  }, [isOpen])

  return (
    <Box themeName={`${themeName}.container`} tokens={accordionItemTokens} customTheme={customTheme}>
      <FocusRing focusRingClass="has-focus-ring">
        <ButtonWithForwardRef
          {...buttonProps}
          aria-expanded={isOpen}
          handlePress={handlePress}
          ref={ref}
          themeName={`${themeName}.button`}
          tokens={accordionItemTokens}
        >
          <Box themeName={`${themeName}.title`} tokens={accordionItemTokens}>
            {title}
          </Box>
          {icon && (
            <Box themeName={`${themeName}.icon`} tokens={accordionItemTokens}>
              <Icon icon={icon} />
            </Box>
          )}
        </ButtonWithForwardRef>
      </FocusRing>
      <TransitionAnimation
        isVisible={isOpen}
        themeName={`${themeName}.region`}
        {...regionProps}
        tokens={accordionItemTokens}
      >
        <Box themeName={`${themeName}.content`} tokens={accordionItemTokens}>
          <FocusScope autoFocus>{rendered}</FocusScope>
        </Box>
      </TransitionAnimation>
    </Box>
  )
}

export default AriaAccordionItem
