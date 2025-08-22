'use client'

import { createCtxNullable } from '@okam/core-lib'
import { useMemo, useRef, useState } from 'react'
import type { SwiperClass, SwiperRef } from 'swiper/react'
import type { TCarouselContext, TCarouselProviderProps } from './interface'

const [useCarousel, CarouselProvider] = createCtxNullable<TCarouselContext>()

export { useCarousel }

export function CarouselContextProvider(props: TCarouselProviderProps) {
  const { controller: controllerProp, children, id, slides, modules, ...rest } = props
  const [controller, setController] = useState<SwiperClass>()

  const prevNavigationRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const nextNavigationRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const swiperRef = useRef<SwiperRef>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const value = useMemo<TCarouselContext>(
    () => ({
      swiper: swiperRef.current?.swiper,
      activeIndex,
      setActiveIndex,
      swiperRef,
      slides,
      controller: controllerProp ?? controller,
      setController,
      prevNavigationRef,
      nextNavigationRef,
      id,
      modules,
      swiperProps: rest,
    }),
    [
      swiperRef,
      activeIndex,
      setActiveIndex,
      slides,
      controllerProp,
      controller,
      setController,
      prevNavigationRef,
      nextNavigationRef,
      id,
      modules,
      rest,
    ],
  )

  return <CarouselProvider value={value}>{children}</CarouselProvider>
}

/**
 * @deprecated Use CarouselContextProvider instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SwiperControllerContextProvider = CarouselContextProvider

/**
 * @deprecated Use useCarousel instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const useSwiperController = useCarousel
