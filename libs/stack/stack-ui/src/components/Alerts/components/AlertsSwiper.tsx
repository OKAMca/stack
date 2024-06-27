import { useRef, useState } from 'react'
import slugify from 'slugify'
import * as swiperModules from 'swiper/modules'
import type { SwiperClass } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperControllerContextProvider } from '../../../providers/Swiper'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TAlertsComponentProps, TAlertsProps } from '../interface'
import AlertsItem from './AlertsItem'
import 'swiper/css'
import 'swiper/css/pagination'
import { AlertsNextNavigationButton, AlertsPrevNavigationButton } from './AlertsNavigationButton'
import AlertsPagination from './pagination/AlertsPagination'

const AlertsSwiper = (props: TAlertsProps) => {
  const {
    themeName,
    tokens,
    customTheme,
    children = (itemProps) => <AlertsItem {...itemProps} />,
    alerts,
    a11y,
    slidesPerView = 1,
    spaceBetween = 50,
    modules,
    prevButton: PrevButton = AlertsPrevNavigationButton,
    nextButton: NextButton = AlertsNextNavigationButton,
    ...rest
  } = props
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)

  const {
    itemRoleDescriptionMessage = 'slide',
    slideRole = 'group',
    containerRoleDescriptionMessage = 'carousel',
    paginationGroupLabel = 'pagination',
  } = a11y ?? {}

  const itemWrapperTheme = useThemeContext(`${themeName}.item.wrapper`, tokens, customTheme)
  const swiperTheme = useThemeContext(`${themeName}.swiper.swiper`, tokens, customTheme)
  const swiperWrapperTheme = useThemeContext(`${themeName}.swiper.wrapper`, tokens, customTheme)

  const defaultModules: TAlertsComponentProps['modules'] = ['A11y']

  const importedModules = [...(modules?.filter((module) => module !== 'Pagination') ?? []), ...defaultModules].map(
    (module) => swiperModules[module],
  )

  const hasNavigation = modules?.includes('Navigation')
  const hasPagination = modules?.includes('Pagination')

  const [controller, setController] = useState<SwiperClass>()
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <SwiperControllerContextProvider controller={controller}>
      {hasNavigation && (
        <PrevButton
          themeName={`${themeName}.navigation.button`}
          tokens={{ ...tokens, order: 'prev' }}
          ref={prevButtonRef}
          aria-label={a11y?.prevSlideMessage}
        />
      )}
      {hasNavigation && (
        <NextButton
          themeName={`${themeName}.navigation.button`}
          tokens={{ ...tokens, order: 'next' }}
          ref={nextButtonRef}
          aria-label={a11y?.nextSlideMessage}
        />
      )}
      {hasPagination && (
        <AlertsPagination
          themeName={`${themeName}.pagination`}
          tokens={tokens}
          activeIndex={activeIndex}
          alerts={alerts}
          paginationGroupLabel={paginationGroupLabel}
        />
      )}
      <Swiper
        tabIndex={0}
        {...rest}
        onSwiper={(c) => {
          setController(c)
          setActiveIndex(c.activeIndex)
        }}
        onSlideChange={(c) => setActiveIndex(c.activeIndex)}
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
        a11y={a11y}
      >
        {alerts.map((alert) => {
          const { id, title, ariaLabel } = alert

          return (
            <SwiperSlide
              key={id}
              className={itemWrapperTheme}
              {...(title ? { 'aria-labelledby': id } : { 'aria-label': ariaLabel })}
              {...{ id: slugify(`${id}-${title}`) }}
              role={slideRole}
              aria-roledescription={itemRoleDescriptionMessage ?? undefined}
            >
              {children({ ...alert, themeName: `${themeName}.item`, tokens })}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </SwiperControllerContextProvider>
  )
}

export default AlertsSwiper
