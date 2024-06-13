import useThemeContext from 'libs/stack/stack-ui/src/providers/Theme/hooks'
import type { TAlertsPaginationBulletProps } from '../../interface'

const AlertsPaginationBullet = (props: TAlertsPaginationBulletProps) => {
  const { themeName, tokens, controller, alerts, activeIndex, index } = props

  const paginationBulletTheme = useThemeContext(`${themeName}.bullet`, tokens)
  const paginationActiveBulletTheme = useThemeContext(`${themeName}.activeBullet`, tokens)
  const alert = alerts[index]
  const isActive = index === activeIndex

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
      aria-label={`${index + 1} of ${alerts.length}`}
      aria-disabled={isActive}
      aria-labelledby={alert.title}
    />
  )
}

export default AlertsPaginationBullet
