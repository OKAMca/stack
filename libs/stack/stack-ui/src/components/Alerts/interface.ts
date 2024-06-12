import type React from 'react'
import type * as SwiperModules from 'swiper/modules'
import type { SwiperClass, SwiperProps } from 'swiper/react'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'
import type { LightboxProps } from '../Lightbox/interface'

type TAlertsNavigationProps = React.ForwardRefExoticComponent<
  TButtonProps & React.RefAttributes<HTMLButtonElement & HTMLAnchorElement>
>

export interface TAlertsItem {
  id: string
  icon?: React.ReactNode
  title?: string
  ariaLabel?: string
  content?: React.ReactNode
  button?: TButtonProps
}

export interface TAlertsPaginationProps extends TDefaultComponent {
  activeIndex: number
  alerts: TAlertsItem[]
  controller?: SwiperClass
}

export interface TAlertsComponentProps
  extends Omit<TDefaultComponent, 'children'>,
    Omit<SwiperProps, 'children' | 'modules'> {
  alerts: TAlertsItem[]
  children?: (props: TAlertsItemProps) => React.ReactNode
  modules?: (keyof typeof SwiperModules)[]
}

export type TAlertsItemProps = TAlertsItem & TDefaultComponent

export interface TAlertsProps extends Omit<LightboxProps, 'children'>, TAlertsComponentProps {
  prevButton?: TAlertsNavigationProps
  nextButton?: TAlertsNavigationProps
}
