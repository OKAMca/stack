'use client'

import type { TCarouselPaginationBulletProps } from './interface'
import { Button } from '../../Button'
import { useCarouselPaginationBullet } from './useCarouselPaginationBullet'

function CarouselPaginationBullet(props: TCarouselPaginationBulletProps) {
  const { themeName = 'carousel.pagination', tokens, customTheme } = props

  const { paginationBulletProps, isActive } = useCarouselPaginationBullet(props)

  return (
    <Button
      customTheme={customTheme}
      as="button"
      {...paginationBulletProps}
      themeName={`${themeName}.bullet`}
      tokens={{ ...tokens, active: isActive }}
    />
  )
}

export default CarouselPaginationBullet
