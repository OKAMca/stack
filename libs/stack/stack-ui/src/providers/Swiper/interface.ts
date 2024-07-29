import type { ReactNode } from 'react'
import type { SwiperClass } from 'swiper/react'

export interface TSwiperControllerProviderProps {
  children: ReactNode
  controller: SwiperClass | undefined
}

export type TSwiperControllerContext = {
  controller: SwiperClass | undefined
}
