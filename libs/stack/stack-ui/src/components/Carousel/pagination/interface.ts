import type { DOMAttributes } from '@react-types/shared'
import type { ReactNode } from 'react'
import type { SwiperClass } from 'swiper/react'
import type { TDefaultComponent } from '../../../types/components'
import type { TButtonProps } from '../../Button/interface'
import type { TCustomA11yOptions } from '../a11y/interface'
import type { TCarouselSlideProps } from '../swiper/interface'

export interface TCarouselPaginationProps<TSlideProps extends TCarouselSlideProps = TCarouselSlideProps>
  extends Omit<TDefaultComponent, 'children'>, Pick<TCustomA11yOptions, 'paginationGroupLabel'> {
  /**
   * @deprecated Use the activeIndex from the context instead
   */
  activeIndex?: number
  /**
   * @deprecated Use the slides from the context instead
   */
  slides?: TSlideProps[]
  children: ReactNode | ((props: SwiperClass) => ReactNode)
}

export interface TCarouselPaginationBulletProps<
  TSlideProps extends TCarouselSlideProps = TCarouselSlideProps,
> extends TButtonProps {
  /**
   * @deprecated Use the activeIndex from the context instead
   */
  activeIndex?: number
  /**
   * @deprecated Use the slides from the context instead
   */
  slides?: TSlideProps[]
  index: number
}
export interface TCarouselPaginationFractionProps extends TDefaultComponent {
  startIndex?: 0 | 1
}
export interface TCarouselPagination {
  paginationProps: DOMAttributes
}

export interface TCarouselPaginationBullet {
  paginationBulletProps: TButtonProps & DOMAttributes
  index: number
  isActive: boolean
}
export interface TCarouselPaginationFraction {
  paginationFractionProps: DOMAttributes
  current: number
  total: number
}
