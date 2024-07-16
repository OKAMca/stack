import type { ReactNode } from 'react'
import type { SwiperClass } from 'swiper/react'

export interface TAlertsControllerProviderProps {
  children: ReactNode
  controller: SwiperClass | undefined
}

export type TAlertsControllerContext = {
  controller: SwiperClass | undefined
}
