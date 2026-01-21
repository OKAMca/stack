'use client'

import type { TButtonProps } from '../../Button/interface'
import type { TAriaAccordionItemProps } from '../interface'
import { useRef } from 'react'
import { FocusRing, FocusScope, useDisclosure } from 'react-aria'
import { useUpdateEffect } from 'react-use'
import { useAccordionCtx } from '../../../providers/Accordion'
import AccordionTransition from '../../../transitions/AccordionTransition'
import { Box, BoxWithForwardRef } from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'

function AriaAccordionItem(props: TAriaAccordionItemProps) {
  const { item, tokens, customTheme } = props
  const { props: itemProps, rendered, key } = item
  const { icon, title, onOpenChange, tokens: itemTokens, themeName: itemThemeName } = itemProps ?? {}
  const { themeName = itemThemeName } = props

  const buttonRef = useRef<HTMLElement | null>(null)
  const panelRef = useRef<HTMLElement | null>(null)
  const { state, TransitionAnimation = AccordionTransition } = useAccordionCtx()

  const isDisabled = state.isDisabled || state.disabledKeys.has(key) || itemProps?.isDisabled
  const isOpen = state.expandedKeys.has(key)
  const disclosureState = {
    isExpanded: isOpen,
    setExpanded: (nextExpanded: boolean) => {
      if (nextExpanded) {
        if (state.allowsMultipleExpanded) {
          const nextKeys = new Set(state.expandedKeys)
          nextKeys.add(key)
          state.setExpandedKeys(nextKeys)
        }
        else {
          state.setExpandedKeys(new Set([key]))
        }
        return
      }

      const nextKeys = new Set(state.expandedKeys)
      nextKeys.delete(key)
      state.setExpandedKeys(nextKeys)
    },
    expand: () => {
      if (state.expandedKeys.has(key))
        return
      if (state.allowsMultipleExpanded) {
        const nextKeys = new Set(state.expandedKeys)
        nextKeys.add(key)
        state.setExpandedKeys(nextKeys)
        return
      }
      state.setExpandedKeys(new Set([key]))
    },
    collapse: () => {
      if (!state.expandedKeys.has(key))
        return
      const nextKeys = new Set(state.expandedKeys)
      nextKeys.delete(key)
      state.setExpandedKeys(nextKeys)
    },
    toggle: () => state.toggleKey(key),
  }

  const { buttonProps, panelProps } = useDisclosure({ isDisabled }, disclosureState, panelRef)
  const { onPress, ...restButtonProps } = buttonProps

  const accordionItemTokens = { ...tokens, isOpen, ...itemTokens }

  const handlePress: TButtonProps['handlePress'] = (e) => {
    e.continuePropagation()
    onPress?.(e)
  }

  useUpdateEffect(() => {
    onOpenChange?.(isOpen)
  }, [isOpen])

  return (
    <Box themeName={`${themeName}.container`} tokens={accordionItemTokens} customTheme={customTheme}>
      <FocusRing focusRingClass="has-focus-ring">
        <ButtonWithForwardRef
          {...restButtonProps}
          handlePress={handlePress}
          ref={buttonRef}
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
        tokens={accordionItemTokens}
      >
        <BoxWithForwardRef
          {...panelProps}
          ref={panelRef}
          themeName={`${themeName}.content`}
          tokens={accordionItemTokens}
        >
          <FocusScope autoFocus>{rendered}</FocusScope>
        </BoxWithForwardRef>
      </TransitionAnimation>
    </Box>
  )
}

export default AriaAccordionItem
