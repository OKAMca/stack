export type {
  TCarouselSlideProps,
  TCarouselSwiper,
  TCarouselSwiperProps,
} from './components/Carousel/swiper/interface'
// `@okam/stack-ui/carousel`: the carousel hook without Swiper modules. `useCarouselSwiper` from the root resolves
// module names through a registry that imports seven `swiper/modules` statically; with this hook the consumer imports
// Swiper and the modules it uses itself, wherever it creates the instance.
export { useCarouselSwiperWithoutModules } from './components/Carousel/swiper/useCarouselSwiperWithoutModules'
export { CarouselContextProvider, useCarousel } from './providers/Carousel'
export type { TCarouselContext, TCarouselProviderProps } from './providers/Carousel/interface'
