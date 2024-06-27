import type React from 'react'
import type * as SwiperModules from 'swiper/modules'
import type { SwiperProps } from 'swiper/react'
import type { A11yOptions } from 'swiper/types'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'

type TCarouselNavigationButtonComponent = React.ForwardRefExoticComponent<
  TButtonProps & React.RefAttributes<HTMLButtonElement & HTMLAnchorElement>
>

export type TCarouselNavigationButtonProps = TButtonProps & {
  onSubmit?: () => void
}

export interface TCarouselSlideProps extends TDefaultComponent {
  id: string
  title?: string
  ariaLabel?: string
  children: React.ReactNode
}

export interface TCarouselPaginationProps extends TDefaultComponent {
  activeIndex: number
  slides: TCarouselSlideProps[]
  paginationGroupLabel?: string
}

export interface TCarouselPaginationBulletProps extends TDefaultComponent {
  activeIndex: number
  slides: TCarouselSlideProps[]
  index: number
}
interface TCustomA11yOptions extends A11yOptions {
  paginationGroupLabel?: string
}

export interface TCarouselComponentProps
  extends Omit<TDefaultComponent, 'children'>,
    Omit<SwiperProps, 'children' | 'modules' | 'a11y'> {
  a11y?: TCustomA11yOptions
  slides: TCarouselSlideProps[]
  children?: (props: TCarouselSlideProps) => React.ReactNode
  id: string
  modules?: (keyof typeof SwiperModules)[]
}

export interface TCarouselProps extends TCarouselComponentProps {
  prevButton?: TCarouselNavigationButtonComponent
  nextButton?: TCarouselNavigationButtonComponent
}
