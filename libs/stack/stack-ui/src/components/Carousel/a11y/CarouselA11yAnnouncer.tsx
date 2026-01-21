'use client'

import type { TCarouselA11yAnnouncerProps } from './interface'
import { VisuallyHidden } from 'react-aria'
import { useCarouselA11yAnnouncer } from './useCarouselA11yAnnouncer'

function CarouselA11yAnnouncer(props: TCarouselA11yAnnouncerProps) {
  const { a11y, announcerProps } = useCarouselA11yAnnouncer(props)

  if (!a11y?.enabled)
    return null

  return (
    <VisuallyHidden>
      <div {...announcerProps} />
    </VisuallyHidden>
  )
}

export default CarouselA11yAnnouncer
