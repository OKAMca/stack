import type React from 'react'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'
import type { TCarouselComponentProps, TCarouselProps } from '../Carousel/interface'
import type { LightboxProps } from '../Lightbox/interface'

export interface TAlertsItem {
  id: string
  icon?: React.ReactNode
  title?: string
  ariaLabel?: string
  content?: React.ReactNode
  button?: TButtonProps
}

export type TAlertsComponentProps = TCarouselComponentProps<TAlertsItemProps>

export type TAlertsItemProps = TAlertsItem & TDefaultComponent

export type TAlertsProps = TAlertsComponentProps &
  Omit<TCarouselProps<TAlertsItemProps>, 'slides'> &
  Omit<LightboxProps, 'children'>
