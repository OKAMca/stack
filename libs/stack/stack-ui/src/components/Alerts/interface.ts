import type React from 'react'
import type { TToken } from '../../providers/Theme/interface'
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

export type TAlertsComponentProps<T extends TToken = TToken> = TCarouselComponentProps<TAlertsItemProps<T>>

export type TAlertsItemProps<T extends TToken = TToken> = TAlertsItem & TDefaultComponent<T>

export type TAlertsProps<T extends TToken = TToken> = TAlertsComponentProps<T> &
  Omit<TCarouselProps<TAlertsItemProps>, 'slides'> &
  Omit<LightboxProps, 'children'>
