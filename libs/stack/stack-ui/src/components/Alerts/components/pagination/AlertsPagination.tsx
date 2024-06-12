import useThemeContext from 'libs/stack/stack-ui/src/providers/Theme/hooks'
import type { TAlertsPaginationProps } from '../../interface'

const AlertsPagination = (props: TAlertsPaginationProps) => {
  const { themeName, tokens, controller, alerts, activeIndex } = props
  const paginationWrapperTheme = useThemeContext(`${themeName}.wrapper`, tokens)
  const paginationBulletTheme = useThemeContext(`${themeName}.bullet`, tokens)
  const paginationActiveBulletTheme = useThemeContext(`${themeName}.activeBullet`, tokens)

  return (
    <div className={paginationWrapperTheme} role="group">
      {alerts.map((_, index) => (
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
          key={JSON.stringify(_)}
          className={`${paginationBulletTheme} ${activeIndex === index ? paginationActiveBulletTheme : ''}`}
          aria-current={index === activeIndex ? 'true' : 'false'}
          aria-label={`${index + 1} of ${alerts.length}`}
        />
      ))}
    </div>
  )
}

export default AlertsPagination
