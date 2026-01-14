import type { DOMAttributes } from '@react-types/shared'
import type { ReactNode, ReactElement, RefObject } from 'react'
import type { useSwiperSlide, SwiperSlideProps, SwiperRef } from 'swiper/react'
import type { Swiper } from 'swiper/types'
import type { TDefaultComponent } from '../../../types/components'
import type { TSwiperProps } from '../interface'

type SlideData = ReturnType<typeof useSwiperSlide>

export interface TCarouselSlideProps
  extends Omit<TDefaultComponent, 'children'>, Omit<SwiperSlideProps, 'children' | 'content'> {
  id: string
  ariaLabel?: string
  children?: ReactNode | ((props: SlideData & TDefaultComponent) => ReactNode)
  /**
   * Automatically gets passed by the Swiper (components with 'SwiperSlide' as displayName)
   */
  swiperSlideIndex?: number
  /**
   * Automatically gets passed by the Swiper (components with 'SwiperSlide' as displayName)
   */
  swiper?: Swiper | undefined
}

export interface TCarouselSwiperProps<TSlideProps extends TCarouselSlideProps = TCarouselSlideProps> extends Omit<
  TDefaultComponent,
  'children'
> {
  children?: ((props: TSlideProps) => ReactNode) | ReactElement<TSlideProps> | ReactElement<TSlideProps>[]
}
export interface TCarouselSwiper<TSlideProps extends TCarouselSlideProps = TCarouselSlideProps> {
  swiperProps: TSwiperProps & DOMAttributes
  slides: TSlideProps[]
  ref: RefObject<SwiperRef | null>
}

export interface TCarouselSlide extends SlideData {
  slideProps: DOMAttributes
  titleProps: DOMAttributes
  ref: RefObject<HTMLElement | null>
}
