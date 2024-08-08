'use client'

import type { Ref } from 'react'
import { forwardRef } from 'react'
import { FocusRing, usePress } from 'react-aria'
import { useSwiperController } from '../../../providers/Swiper'
import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import Icon from '../../Icon'
import type { TCarouselNavigationButtonProps } from '../interface'

export const CarouselNavigationButton = forwardRef(
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

export const CarouselNextNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { children, ...rest } = props
    const { controller } = useSwiperController()
    const { params, activeIndex = 1, slides } = controller ?? {}
    const { slidesPerView = 1, loop } = params ?? {}

    const slidesGroupIndex = Math.round(
      typeof slidesPerView === 'number' ? (activeIndex + 1) / slidesPerView : activeIndex,
    )
    const slidesGroupLength = Math.round(
      slides && typeof slidesPerView === 'number' ? slides.length / slidesPerView : slides?.length ?? 1,
    )

    const allowNavigateNext = slidesGroupIndex < slidesGroupLength

    const disabled = !loop && !allowNavigateNext

    return (
      <CarouselNavigationButton onSubmit={() => controller?.slideNext()} {...rest} ref={ref} isDisabled={disabled}>
        {children || <Icon icon="ArrowRight" />}
      </CarouselNavigationButton>
    )
  },
)

export const CarouselPrevNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { children, ...rest } = props
    const { controller } = useSwiperController()
    const { params, activeIndex = 1 } = controller ?? {}
    const { loop } = params ?? {}

    const allowNavigatePrev = activeIndex !== 0

    const disabled = !loop && !allowNavigatePrev

    return (
      <CarouselNavigationButton onSubmit={() => controller?.slidePrev()} {...rest} ref={ref} isDisabled={disabled}>
        {children || <Icon icon="ArrowLeft" />}
      </CarouselNavigationButton>
    )
  },
)

CarouselNavigationButton.displayName = 'CarouselNavigationButton'
CarouselNextNavigationButton.displayName = 'CarouselNextNavigationButton'
CarouselPrevNavigationButton.displayName = 'CarouselPrevNavigationButton'

export default CarouselNavigationButton
