import { tv } from 'tailwind-variants'
import button from '../Button'
import typography from '../Typography'

const alertsWrapper = tv({
  base: 'bg-color-1-200 p-4 flex flex-col gap-4',
})

const alertsCarouselWrapper = tv({
  base: 'flex justify-between items-center gap-4 relative',
})

const alertsCloseBtn = tv({
  extend: button,
  base: 'self-end',
})

const alertsSwiperSwiper = tv({
  base: 'bg-color-1-300 m-2 rounded-lg order-2',
})

const alertsSwiperWrapper = tv({
  base: 'm-4',
})

const alertsItemWrapper = tv({
  base: '',
})

const alertsItemContainer = tv({
  base: '',
})

const alertsItemTitle = tv({
  extend: typography,
  defaultVariants: {
    size: 'h1',
  },
})

const alertsItemContent = tv({
  extend: typography,
})

const alertsItemIcon = tv({
  base: 'block w-min bg-color-1-400 p-2 rounded-lg',
})

const alertsNavigationButton = tv({
  extend: button,
  variants: {
    order: {
      prev: 'order-1',
      next: 'order-3',
    },
  },
})

const alertsPaginationWrapper = tv({
  base: 'flex gap-4 justify-center absolute z-10 bottom-4 left-0 right-0',
})

const alertsPaginationBullet = tv({
  base: 'w-4 h-4 rounded-full block bg-color-1-600 focus-ring-black',
  variants: {
    active: {
      true: 'bg-color-1-100',
      false: '',
    },
  },
})

const alertsTheme = {
  wrapper: alertsWrapper,
  carouselWrapper: alertsCarouselWrapper,
  closeBtn: alertsCloseBtn,
  swiper: {
    swiper: alertsSwiperSwiper,
    wrapper: alertsSwiperWrapper,
  },
  item: {
    wrapper: alertsItemWrapper,
    container: alertsItemContainer,
    title: alertsItemTitle,
    content: alertsItemContent,
    icon: alertsItemIcon,
  },
  navigation: {
    button: alertsNavigationButton,
  },
  pagination: {
    wrapper: alertsPaginationWrapper,
    bullet: alertsPaginationBullet,
  },
}

export default alertsTheme
