import { tv } from 'tailwind-variants'

const carouselContainer = tv({
  base: 'flex justify-between items-center relative h-[475px] mb-18 lg:h-[650px]',
})

const carouselSwiper = tv({
  base: 'bg-color-1-400 !py-4',
})

const carouselSwiperWrapper = tv({
  base: 'bg-color-1-100 py-4',
})

const carouselSlideContainer = tv({
  base: 'flex justify-center m-auto px-8 w-full h-full',
})

const carouselSlideWrapper = tv({
  base: 'bg-color-1-200 p-2',
})

const carouselNavigationButtons = tv({
  base: 'bg-color-1-500 rounded-full p-4 text-white',
})

const carousel = {
  container: carouselContainer,
  slideContainer: carouselSlideContainer,
  slideWrapper: carouselSlideWrapper,
  navigationButtons: carouselNavigationButtons,
  swiper: carouselSwiper,
  swiperWrapper: carouselSwiperWrapper,
}

export default carousel
