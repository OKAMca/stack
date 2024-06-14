import useThemeContext from 'libs/stack/stack-ui/src/providers/Theme/hooks'
import slugify from 'slugify'
import type { TAlertsPaginationBulletProps } from '../../interface'

const AlertsPaginationBullet = (props: TAlertsPaginationBulletProps) => {
  const { themeName, tokens, controller, alerts, activeIndex, index } = props

  const paginationBulletTheme = useThemeContext(`${themeName}.bullet`, tokens)
  const paginationActiveBulletTheme = useThemeContext(`${themeName}.activeBullet`, tokens)
  const alert = alerts[index]
  const isActive = index === activeIndex
  const { title, id } = alert

  const hasTitle = title && title.length > 0

  return (
    <span
      tabIndex={0}
      role="button"
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          controller?.slideTo(index)
        }
      }}
      onClick={() => controller?.slideTo(index)}
      key={JSON.stringify(alert)}
      className={`${paginationBulletTheme} ${isActive ? paginationActiveBulletTheme : ''}`}
      aria-current={isActive ? 'true' : 'false'}
      aria-label={!hasTitle ? `${index + 1} / ${alerts.length}` : undefined}
      aria-disabled={isActive}
      aria-labelledby={hasTitle ? slugify(`${id}-${title}`) : undefined}
    />
  )
}

export default AlertsPaginationBullet
