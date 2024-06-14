import { useKeyboard, usePress } from 'react-aria'
import slugify from 'slugify'
import Box from '../../../Box'
import type { TAlertsPaginationBulletProps } from '../../interface'

const AlertsPaginationBullet = (props: TAlertsPaginationBulletProps) => {
  const { themeName, tokens, controller, alerts, activeIndex, index } = props

  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        controller?.slideTo(index)
      }
    },
  })

  const { pressProps } = usePress({
    onPress: () => controller?.slideTo(index),
  })

  const alert = alerts[index]
  const isActive = index === activeIndex
  const { title, id } = alert

  const hasTitle = title && title.length > 0

  return (
    <Box
      as="span"
      {...{
        tabindex: 0,
        role: 'button',
        'aria-current': isActive ? 'true' : 'false',
        'aria-disabled': isActive,
        'aria-label': !hasTitle ? `${index + 1} / ${alerts.length}` : undefined,
        'aria-labelledby': hasTitle ? slugify(`${id}-${title}`) : undefined,
      }}
      {...keyboardProps}
      {...pressProps}
      themeName={`${themeName}.bullet`}
      tokens={{ ...tokens, active: isActive }}
    />
  )
}

export default AlertsPaginationBullet
