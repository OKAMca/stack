import type * as React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'
import type { TLegacyCarouselProps } from '../Carousel/interface'
import type { TCarouselSlideProps } from '../Carousel/swiper/interface'
import type { LightboxProps } from '../Lightbox/interface'

export interface TAlertsItem extends TCarouselSlideProps {
  id: string
  icon?: React.ReactNode
  title?: string
  ariaLabel?: string
  content?: React.ReactNode
  button?: TButtonProps
}

export type TAlertsItemProps<T extends TToken = TToken> = TAlertsItem & Omit<TDefaultComponent<T>, 'children'>

export type TAlertsProps<T extends TToken = TToken> = TLegacyCarouselProps<TAlertsItemProps>
  & Omit<LightboxProps, 'children'>
  & Omit<TDefaultComponent<T>, 'children'>
