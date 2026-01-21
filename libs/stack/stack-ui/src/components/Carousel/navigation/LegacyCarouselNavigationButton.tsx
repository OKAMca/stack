'use client'

import type * as React from 'react'
import type { TAnchorProps } from '../../Button/interface'
import { FocusRing, usePress } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'

interface LegacyCarouselNavigationButtonProps extends TAnchorProps {
  ref?: React.Ref<HTMLElement>
  onSubmit?: () => void
}

/**
 * @deprecated Use CarouselNextNavigation/CarouselPrevNavigation instead
 */
export function LegacyCarouselNavigationButton({ ref, ...props }: LegacyCarouselNavigationButtonProps) {
  const { themeName, tokens, customTheme, children, onSubmit, ...rest } = props
  const { isDisabled } = rest

  const { pressProps } = usePress({
    onPress: () => onSubmit?.(),
  })

  return (
    <FocusRing within focusRingClass="has-focus-ring">
      <ButtonWithForwardRef
        themeName={themeName}
        tokens={tokens}
        ref={ref}
        {...pressProps}
        {...rest}
        {...{ 'aria-disabled': isDisabled }}
      >
        {children}
      </ButtonWithForwardRef>
    </FocusRing>
  )
}

/**
 * @deprecated Use CarouselNextNavigation instead
 */
export function LegacyCarouselNextNavigationButton({ ref, ...props }: LegacyCarouselNavigationButtonProps) {
  const { children, ...rest } = props
  const { controller } = useCarousel()
  if (controller == null) {
    return <LegacyCarouselNavigationButton {...rest} ref={ref} isDisabled>{children}</LegacyCarouselNavigationButton>
  }
  const { params, activeIndex = 1, slides } = controller
  const { slidesPerView = 1, loop } = params ?? {}

  const slidesGroupIndex = Math.round(
    typeof slidesPerView === 'number' ? (activeIndex + 1) / slidesPerView : activeIndex,
  )
  const slidesGroupLength = Math.round(
    slides != null && typeof slidesPerView === 'number' ? slides.length / slidesPerView : (slides?.length ?? 1),
  )

  const allowNavigateNext = slidesGroupIndex < slidesGroupLength

  const disabled = loop !== true && !allowNavigateNext

  return (
    <LegacyCarouselNavigationButton
      onSubmit={() => controller?.slideNext()}
      {...rest}
      ref={ref}
      isDisabled={disabled}
    >
      {/* eslint-disable-next-line ts/strict-boolean-expressions, ts/prefer-nullish-coalescing -- render fallback icon if children is falsy (null, undefined, empty, false, 0) */}
      {children || <Icon icon="ArrowRight" />}
    </LegacyCarouselNavigationButton>
  )
}

/**
 * @deprecated Use CarouselPrevNavigation instead
 */
export function LegacyCarouselPrevNavigationButton({ ref, ...props }: LegacyCarouselNavigationButtonProps) {
  const { children, ...rest } = props
  const { controller } = useCarousel()
  const { params, activeIndex = 1 } = controller ?? {}
  const { loop } = params ?? {}

  const allowNavigatePrev = activeIndex !== 0

  const disabled = loop !== true && !allowNavigatePrev

  return (
    <LegacyCarouselNavigationButton
      onSubmit={() => controller?.slidePrev()}
      {...rest}
      ref={ref}
      isDisabled={disabled}
    >
      {/* eslint-disable-next-line ts/strict-boolean-expressions, ts/prefer-nullish-coalescing -- render fallback icon if children is falsy (null, undefined, empty, false, 0) */}
      {children || <Icon icon="ArrowLeft" />}
    </LegacyCarouselNavigationButton>
  )
}

LegacyCarouselNavigationButton.displayName = 'LegacyCarouselNavigationButton'
LegacyCarouselNextNavigationButton.displayName = 'LegacyCarouselNextNavigationButton'
LegacyCarouselPrevNavigationButton.displayName = 'LegacyCarouselPrevNavigationButton'
