import * as swiperModules from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TCarouselComponentProps } from '../interface'
import CarouselSlide from './CarouselSlide'

const CarouselSwiper = (props: TCarouselComponentProps) => {
  const {
    slides,
    slidesPerView = 1,
    spaceBetween = 50,
    themeName,
    tokens,
    customTheme,
    modules,
    a11y,
    children = (itemProps) => <CarouselSlide {...itemProps} />,
    ...rest
  } = props

  const slideWrapperTheme = useThemeContext(`${themeName}.slide.wrapper`, tokens)
  const swiperTheme = useThemeContext(`${themeName}.swiper.swiper`, tokens, customTheme)
  const swiperWrapperTheme = useThemeContext(`${themeName}.swiper.wrapper`, tokens)

  const defaultModules: TCarouselComponentProps['modules'] = ['A11y']

  const importedModules = [...(modules?.filter((module) => module !== 'Pagination') ?? []), ...defaultModules].map(
    (module) => swiperModules[module],
  )
  const {
    itemRoleDescriptionMessage = 'slide',
    slideRole = 'group',
    containerRoleDescriptionMessage = 'carousel',
  } = a11y ?? {}

  return (
    <Swiper
      tabIndex={0}
      {...rest}
      watchSlidesProgress
      role="group"
      aria-roledescription={containerRoleDescriptionMessage ?? undefined}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      className={swiperTheme}
      wrapperClass={swiperWrapperTheme}
      modules={importedModules}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
      a11y={{
        ...a11y,
        enabled: false,
      }}
    >
      {slides.map((slide) => {
        const { id: slideId, title } = slide

        return (
          <SwiperSlide
            key={slideId}
            className={slideWrapperTheme}
            {...(title ? { 'aria-labelledby': slideId } : { 'aria-label': slide.ariaLabel })}
            role={slideRole}
            aria-roledescription={itemRoleDescriptionMessage ?? undefined}
          >
            {children({ ...slide, themeName: `${themeName}.slide`, tokens })}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default CarouselSwiper
