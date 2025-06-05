/* eslint-disable @typescript-eslint/naming-convention */
import { mergeProps } from 'react-aria'
import * as swiperModules from 'swiper/modules'
import { useCarousel } from '../../../providers/Carousel'
import type { TSwiperModule } from '../interface'
import type { TCarouselSwiper, TCarouselSwiperProps } from './interface'

const defaultModules: TSwiperModule[] = ['A11y', 'Controller']

const paginationModule: TSwiperModule = 'Pagination'

export function useCarouselSwiper(props: TCarouselSwiperProps): TCarouselSwiper {
  const { children, ...rest } = props
  const {
    controller,
    setController,
    modules,
    slides,
    id,
    nextNavigationRef,
    prevNavigationRef,
    swiperProps: contextSwiperProps,
    swiperRef,
    setActiveIndex,
  } = useCarousel()
  const { a11y } = controller?.params ?? {}

  const importedModules = [...(modules?.filter((module) => module !== paginationModule) ?? []), ...defaultModules].map(
    (module) => swiperModules[module],
  )

  const { containerRoleDescriptionMessage = 'carousel' } = a11y ?? {}

  const swiperProps: TCarouselSwiper['swiperProps'] = {
    navigation: {
      nextEl: nextNavigationRef.current,
      prevEl: prevNavigationRef.current,
      enabled: modules?.includes('Navigation'),
    },
    id,
    watchSlidesProgress: true,
    role: 'group',
    onSwiper: setController,
    onSlideChange: (swiper) => {
      setActiveIndex(swiper.activeIndex)
    },
    modules: importedModules,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      enabled: true,
      ...a11y,
    },
    'aria-roledescription': containerRoleDescriptionMessage ?? undefined,
    tabIndex: 0,
  }

  return {
    swiperProps: mergeProps(contextSwiperProps, swiperProps, rest),
    slides,
    ref: swiperRef,
  }
}
