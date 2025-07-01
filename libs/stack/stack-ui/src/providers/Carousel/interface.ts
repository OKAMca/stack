import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'
import type { SwiperClass, SwiperRef } from 'swiper/react'
import type { Swiper } from 'swiper/types'
import type { TSwiperModule, TSwiperProps } from '../../components/Carousel/interface'
import type { TCarouselSlideProps } from '../../components/Carousel/swiper/interface'

export interface TCarouselProviderProps extends Omit<TSwiperProps, 'children' | 'modules' | 'controller'> {
  children: ReactNode
  /**
   * @deprecated Provider declares the controller
   */
  controller?: SwiperClass
  id: string
  modules?: TSwiperModule[]
  slides: TCarouselSlideProps[]
}

export type TCarouselContext = {
  slides: TCarouselSlideProps[]
  modules: TSwiperModule[] | undefined
  controller: SwiperClass | undefined
  setController: Dispatch<SetStateAction<SwiperClass | undefined>>
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  id: string
  swiper: Swiper | undefined
  swiperRef: RefObject<SwiperRef>
  prevNavigationRef: RefObject<HTMLButtonElement & HTMLAnchorElement>
  nextNavigationRef: RefObject<HTMLButtonElement & HTMLAnchorElement>
  swiperProps: Omit<TSwiperProps, 'children' | 'modules' | 'controller' | 'id'>
}
