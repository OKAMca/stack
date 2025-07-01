import type { DOMAttributes } from '@react-types/shared'
import type { A11yOptions } from 'swiper/types'

export interface TCarouselA11yAnnouncerProps extends DOMAttributes {}

export interface TCustomA11yOptions extends A11yOptions {
  /**
   * @deprecated Pass an aria-label to the pagination component instead
   */
  paginationGroupLabel?: string
}
