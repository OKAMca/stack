import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'
import type { SwiperClass, SwiperRef } from 'swiper/react'
import type { Swiper } from 'swiper/types'
import type { TCarouselModule, TSwiperProps } from '../../components/Carousel/interface'
import type { TCarouselSlideProps } from '../../components/Carousel/swiper/interface'

export interface TCarouselProviderProps extends Omit<TSwiperProps, 'children' | 'modules' | 'controller'> {
  children: ReactNode
  /**
   * @deprecated Provider declares the controller
   */
  controller?: SwiperClass
  id: string
  modules?: TCarouselModule[]
  slides: TCarouselSlideProps[]
}

export interface TCarouselContext {
  slides: TCarouselSlideProps[]
  modules: TCarouselModule[] | undefined
  controller: SwiperClass | undefined
  setController: Dispatch<SetStateAction<SwiperClass | undefined>>
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  id: string
  swiper: Swiper | undefined
  swiperRef: RefObject<SwiperRef | null>
  prevNavigationRef: RefObject<(HTMLButtonElement & HTMLAnchorElement) | null>
  nextNavigationRef: RefObject<(HTMLButtonElement & HTMLAnchorElement) | null>
  swiperProps: Omit<TSwiperProps, 'children' | 'modules' | 'controller' | 'id'>
}
