'use client'

import type { ReactNode, RefObject } from 'react'
import type { TButtonProps } from '../../Button/interface'
import type { TAriaAccordionItemProps } from '../interface'
import { useRef } from 'react'
import { FocusRing, FocusScope, useDisclosure, useFocusManager } from 'react-aria'
import { useUpdateEffect } from 'react-use'
import { useAccordionCtx } from '../../../providers/Accordion'
import AccordionTransition from '../../../transitions/AccordionTransition'
import { Box, BoxWithForwardRef } from '../../Box'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'

/**
 * Focuses the first tabbable element of a kept-mounted panel when it opens.
 * Must render inside a `FocusScope`. Only acts when the open was triggered from the header button,
 * so a find-in-page (`beforematch`) open never steals focus.
 */
function FocusFirstOnOpen({ isOpen, buttonRef }: { isOpen: boolean, buttonRef: RefObject<HTMLElement | null> }) {
  const focusManager = useFocusManager()

  useUpdateEffect(() => {
    if (isOpen && buttonRef.current != null && document.activeElement === buttonRef.current)
      focusManager?.focusFirst({ tabbable: true })
  }, [isOpen])

  return null
}

function AriaAccordionItem(props: TAriaAccordionItemProps) {
  const { item, tokens, customTheme, keepMounted = false, autoFocusPanel = !keepMounted, headingLevel } = props
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

  const accordionItemTokens = { ...tokens, isOpen, ...(keepMounted ? { keepMounted } : {}), ...itemTokens }

  const handlePress: TButtonProps['handlePress'] = (e) => {
    e.continuePropagation()
    onPress?.(e)
  }

  useUpdateEffect(() => {
    onOpenChange?.(isOpen)
  }, [isOpen])

  const button = (
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
  )

  const header = headingLevel != null
    ? (
        <Box as={`h${headingLevel}`} themeName={`${themeName}.heading`} tokens={accordionItemTokens}>
          {button}
        </Box>
      )
    : button

  let panel: ReactNode
  if (keepMounted) {
    // The panel stays mounted: useDisclosure toggles `hidden="until-found"` on it, listens to
    // `beforematch` and exposes --disclosure-panel-height for a CSS height transition.
    panel = (
      <Box themeName={`${themeName}.region`} tokens={accordionItemTokens}>
        <BoxWithForwardRef
          {...panelProps}
          ref={panelRef}
          themeName={`${themeName}.content`}
          tokens={accordionItemTokens}
        >
          {autoFocusPanel
            ? (
                <FocusScope>
                  <FocusFirstOnOpen isOpen={isOpen} buttonRef={buttonRef} />
                  {rendered}
                </FocusScope>
              )
            : rendered}
        </BoxWithForwardRef>
      </Box>
    )
  }
  else {
    panel = (
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
          <FocusScope autoFocus={autoFocusPanel}>{rendered}</FocusScope>
        </BoxWithForwardRef>
      </TransitionAnimation>
    )
  }

  return (
    <Box themeName={`${themeName}.container`} tokens={accordionItemTokens} customTheme={customTheme}>
      {header}
      {panel}
    </Box>
  )
}

export default AriaAccordionItem
