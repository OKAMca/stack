import { tv } from 'tailwind-variants'
import button from '../Button'

const carouselWrapper = tv({
  base: 'flex justify-between items-center gap-4 relative',
})

const carouselSwiperSwiper = tv({
  base: 'bg-color-1-300 m-2 rounded-lg order-2',
})

const carouselSwiperWrapper = tv({
  base: 'm-4',
})

const carouselNavigationButton = tv({
  extend: button,
  variants: {
    order: {
      prev: 'order-1',
      next: 'order-3',
    },
  },
})

const carouselPaginationWrapper = tv({
  base: 'flex gap-4 justify-center absolute z-10 bottom-4 left-0 right-0',
})

const carouselPaginationBullet = tv({
  base: 'w-4 h-4 rounded-full block bg-color-1-600 focus-ring-black',
  variants: {
    active: {
      true: 'bg-color-1-100',
      false: '',
    },
  },
})

const carouselTheme = {
  wrapper: carouselWrapper,
  swiper: {
    swiper: carouselSwiperSwiper,
    wrapper: carouselSwiperWrapper,
  },
  navigation: {
    button: carouselNavigationButton,
  },
  pagination: {
    wrapper: carouselPaginationWrapper,
    bullet: carouselPaginationBullet,
  },
}

export default carouselTheme
