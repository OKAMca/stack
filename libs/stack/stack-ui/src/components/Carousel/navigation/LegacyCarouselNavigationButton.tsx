'use client'

import type { Ref } from 'react'
import { forwardRef } from 'react'
import { FocusRing, usePress } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import Icon from '../../Icon'
import type { TCarouselNavigationButtonProps } from './interface'

/**
 * @deprecated Use CarouselNextNavigation/CarouselPrevNavigation instead
 */
export const LegacyCarouselNavigationButton = forwardRef(
  (props: TCarouselNavigationButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
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
  },
)

/**
 * @deprecated Use CarouselNextNavigation instead
 */
export const LegacyCarouselNextNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { children, ...rest } = props
    const { controller } = useCarousel()
    const { params, activeIndex = 1, slides } = controller ?? {}
    const { slidesPerView = 1, loop } = params ?? {}

    const slidesGroupIndex = Math.round(
      typeof slidesPerView === 'number' ? (activeIndex + 1) / slidesPerView : activeIndex,
    )
    const slidesGroupLength = Math.round(
      slides && typeof slidesPerView === 'number' ? slides.length / slidesPerView : (slides?.length ?? 1),
    )

    const allowNavigateNext = slidesGroupIndex < slidesGroupLength

    const disabled = !loop && !allowNavigateNext

    return (
      <LegacyCarouselNavigationButton
        onSubmit={() => controller?.slideNext()}
        {...rest}
        ref={ref}
        isDisabled={disabled}
      >
        {children || <Icon icon="ArrowRight" />}
      </LegacyCarouselNavigationButton>
    )
  },
)

/**
 * @deprecated Use CarouselPrevNavigation instead
 */
export const LegacyCarouselPrevNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { children, ...rest } = props
    const { controller } = useCarousel()
    const { params, activeIndex = 1 } = controller ?? {}
    const { loop } = params ?? {}

    const allowNavigatePrev = activeIndex !== 0

    const disabled = !loop && !allowNavigatePrev

    return (
      <LegacyCarouselNavigationButton
        onSubmit={() => controller?.slidePrev()}
        {...rest}
        ref={ref}
        isDisabled={disabled}
      >
        {children || <Icon icon="ArrowLeft" />}
      </LegacyCarouselNavigationButton>
    )
  },
)

LegacyCarouselNavigationButton.displayName = 'LegacyCarouselNavigationButton'
LegacyCarouselNextNavigationButton.displayName = 'LegacyCarouselNextNavigationButton'
LegacyCarouselPrevNavigationButton.displayName = 'LegacyCarouselPrevNavigationButton'

export default LegacyCarouselNavigationButton
