'use client'

import type { TSwiperProps } from '../interface'
import type { TCarouselPaginationBullet, TCarouselPaginationBulletProps } from './interface'
import { get, isEmpty } from 'radashi'
import { mergeProps, useFocusManager, useKeyboard, usePress } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'

const directionKeys: Record<NonNullable<TSwiperProps['direction']>, { prev: string, next: string }> = {
  horizontal: {
    prev: 'ArrowLeft',
    next: 'ArrowRight',
  },
  vertical: {
    prev: 'ArrowUp',
    next: 'ArrowDown',
  },
}

export function useCarouselPaginationBullet(props: TCarouselPaginationBulletProps): TCarouselPaginationBullet {
  const { controller, slides, swiperProps, activeIndex } = useCarousel()
  const { direction = 'horizontal' } = swiperProps
  const { index, handlePress } = props

  const focusManager = useFocusManager()

  const { prev, next } = directionKeys[direction]
  const { keyboardProps } = useKeyboard({
    onKeyUp: (e) => {
      if (e.key === prev) {
        e.preventDefault()
        focusManager?.focusPrevious({ wrap: true })
      }
      if (e.key === next) {
        e.preventDefault()
        focusManager?.focusNext({ wrap: true })
      }
    },
  })

  const { pressProps } = usePress({
    onPress: (e) => {
      controller?.slideTo(index)
      handlePress?.(e)
      focusManager?.focusNext({ wrap: true })
    },
  })

  const slide = slides[index]
  const isActive = index === activeIndex
  const { title, id } = slide ?? {}

  const hasTitle = !isEmpty(title)

  return {
    paginationBulletProps: mergeProps(keyboardProps, pressProps, {
      'tabIndex': 0,
      'role': 'button',
      'aria-current': isActive ? 'true' : 'false',
      'aria-disabled': isActive,
      'isDisabled': isActive,
      'aria-label': !hasTitle ? (get<string | undefined>(props, 'aria-label') ?? `${index + 1} / ${slides.length}`) : undefined,
      'aria-labelledby': hasTitle ? id : undefined,
    }),
    index,
    isActive,
  }
}
