import { A11y, Keyboard, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TAlertsComponentProps } from '../interface'
import AlertsItem from './AlertsItem'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/a11y'
import 'swiper/css/keyboard'

const AlertsSwiper = (props: TAlertsComponentProps) => {
  const {
    themeName,
    tokens,
    customTheme,
    children = (itemProps) => <AlertsItem {...itemProps} />,
    alerts,
    a11y,
    slidesPerView = 1,
    spaceBetween = 50,
    ...rest
  } = props

  const {
    itemRoleDescriptionMessage = 'slide',
    slideRole = 'group',
    containerRoleDescriptionMessage = 'carousel',
  } = a11y ?? {}

  const itemWrapperTheme = useThemeContext(`${themeName}.item.wrapper`, tokens, customTheme)
  const swiperTheme = useThemeContext(`${themeName}.swiper.swiper`, tokens, customTheme)
  const swiperWrapperTheme = useThemeContext(`${themeName}.swiper.wrapper`, tokens, customTheme)

  return (
    <Swiper
      {...rest}
      role="group"
      aria-roledescription={containerRoleDescriptionMessage ?? undefined}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      className={swiperTheme}
      wrapperClass={swiperWrapperTheme}
      modules={[Navigation, Keyboard, A11y]}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
    >
      {alerts.map((alert) => {
        const { id, title, ariaLabel } = alert

        return (
          <SwiperSlide
            key={id}
            className={itemWrapperTheme}
            {...(title ? { 'aria-labelledby': id } : { 'aria-label': ariaLabel })}
            role={slideRole}
            aria-roledescription={itemRoleDescriptionMessage ?? undefined}
          >
            {children({ ...alert, themeName: `${themeName}.item`, tokens })}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default AlertsSwiper
