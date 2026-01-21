'use client'

/**
 * Popover - react-aria overlay component
 *
 * Uses cloneElement to inject arrow positioning props from usePopover,
 * and Children.map to wrap children with FocusRing.
 *
 * @see https://react-spectrum.adobe.com/react-aria/Popover.html
 * @see docs/ADR/005_react-stately-eslint-exceptions.md
 */

import type { CSSProperties } from 'react'
import type { TPopoverProps } from './interface'
import { Children, cloneElement, useRef } from 'react'
import { DismissButton, FocusRing, FocusScope, Overlay, usePopover } from 'react-aria'
import { Box, BoxWithForwardRef } from '../Box'

export function Popover(props: TPopoverProps) {
  const {
    children,
    themeName = 'popover',
    tokens,
    customTheme,
    placement: placementProp = 'bottom',
    offset = 5,
    state,
    arrow,
    sizeRef: sizeRefProp,
    popoverRef: popoverRefProp,
    triggerRef: triggerRefProp,
    contain = true,
    autoFocus = true,
    restoreFocus = true,
  } = props

  const sizeRef = sizeRefProp ?? triggerRefProp

  const { isOpen } = state

  const innerPopoverRef = useRef<HTMLDivElement>(null)
  const popoverRef = popoverRefProp ?? innerPopoverRef

  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      placement: placementProp,
      offset,
      popoverRef,
    },
    state,
  )

  const popoverTokens = {
    placement: placement ?? 'bottom',
    isOpen,
    ...tokens,
  }

  const style: CSSProperties = {
    [`--${themeName?.replace('.', '-')}-container-width`]: `${sizeRef?.current?.offsetWidth}px`,
    ...popoverProps.style,
  }

  return (
    <Overlay>
      <Box themeName={`${themeName}.underlay`} tokens={popoverTokens} {...underlayProps} />
      <FocusScope autoFocus={autoFocus} restoreFocus={restoreFocus} contain={contain}>
        <BoxWithForwardRef
          themeName={`${themeName}.popover`}
          customTheme={customTheme}
          tokens={popoverTokens}
          ref={popoverRef}
          {...popoverProps}
          style={style}
        >
          {arrow != null && cloneElement(arrow, { ...arrowProps, themeName: `${themeName}.arrow`, tokens: popoverTokens })}
          <DismissButton onDismiss={state.close} />
          {Children.map(children, child => (
            <FocusRing focusRingClass="has-focus-ring">{child}</FocusRing>
          ))}
          <DismissButton onDismiss={state.close} />
        </BoxWithForwardRef>
      </FocusScope>
    </Overlay>
  )
}
