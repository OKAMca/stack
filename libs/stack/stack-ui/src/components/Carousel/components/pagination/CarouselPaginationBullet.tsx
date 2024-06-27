import { useFocusManager, useKeyboard, usePress } from 'react-aria'
import slugify from 'slugify'
import { useSwiperController } from '../../../../providers/Swiper'
import Button from '../../../Button'
import type { TCarouselPaginationBulletProps } from '../../interface'

const CarouselPaginationBullet = (props: TCarouselPaginationBulletProps) => {
  const { themeName, tokens, slides, activeIndex, index } = props

  const { controller } = useSwiperController()

  const focusManager = useFocusManager()
  const prevIndex = index === 0 ? slides.length - 1 : index - 1
  const nextIndex = index === slides.length - 1 ? 0 : index + 1

  const { keyboardProps } = useKeyboard({
    onKeyUp: (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        focusManager?.focusPrevious({ wrap: true })
        controller?.slideTo(prevIndex)
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        focusManager?.focusNext({ wrap: true })
        controller?.slideTo(nextIndex)
      }
    },
  })

  const { pressProps } = usePress({
    onPress: () => controller?.slideTo(index),
  })

  const slide = slides[index]
  const isActive = index === activeIndex
  const { title, id } = slide

  const hasTitle = title && title.length > 0

  return (
    <Button
      as="button"
      {...{
        tabIndex: 0,
        role: 'button',
        'aria-current': isActive ? 'true' : 'false',
        'aria-disabled': isActive,
        'aria-label': !hasTitle ? `${index + 1} / ${slides.length}` : undefined,
        'aria-labelledby': hasTitle ? slugify(`${id}-${title}`) : undefined,
      }}
      {...keyboardProps}
      {...pressProps}
      themeName={`${themeName}.bullet`}
      tokens={{ ...tokens, active: isActive }}
    />
  )
}

export default CarouselPaginationBullet
