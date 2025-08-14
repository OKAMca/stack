import { tv } from 'tailwind-variants'
import button from '../Button'
import typography from '../Typography'

const carouselWrapper = tv({
  base: 'flex flex-wrap justify-between items-center gap-4 relative',
})

const carouselSwiperSwiper = tv({
  base: `
    basis-9/12
    bg-color-1-300
    m-2
    rounded-lg
    order-2
    focus-visible:outline-2
    focus-visible:outline-black
    focus-visible:outline-offset-2
  `,
})

const carouselSwiperWrapper = tv({
  base: '',
})

const carouselNavigationButton = tv({
  extend: button,
  base: 'basis-1/12',
  variants: {
    order: {
      prev: 'order-1',
      next: 'order-3',
    },
  },
})

const carouselPaginationWrapper = tv({
  base: 'flex gap-4 justify-center  z-10 bottom-4 left-0 right-0 order-4 basis-full',
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

const carouselPaginationFractionWrapper = tv({
  base: 'bg-color-1-300 rounded-lg p-2',
})

const carouselSlideWrapper = tv({
  base: 'px-4 flex flex-col justify-center h-full',
})

const carouselSlideContainer = tv({
  base: 'flex flex-col gap-2 bg-color-1-400 my-4 rounded-lg p-4',
})

const carouselSlideTitle = tv({
  extend: typography,
  defaultVariants: {
    size: 'h3',
  },
})

const carouselTheme = {
  carouselWrapper,
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
    fraction: {
      wrapper: carouselPaginationFractionWrapper,
    },
  },
  slide: {
    wrapper: carouselSlideWrapper,
    container: carouselSlideContainer,
    title: carouselSlideTitle,
  },
}

export default carouselTheme
