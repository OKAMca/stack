import useThemeContext from 'libs/stack/stack-ui/src/providers/Theme/hooks'
import type { TAlertsPaginationProps } from '../../interface'
import AlertsPaginationBullet from './AlertsPaginationBullet'

const AlertsPagination = (props: TAlertsPaginationProps) => {
  const { themeName, tokens, controller, alerts, activeIndex, paginationGroupLabel } = props
  const paginationWrapperTheme = useThemeContext(`${themeName}.wrapper`, tokens)

  return (
    <div className={paginationWrapperTheme} role="group" aria-label={paginationGroupLabel}>
      {alerts.map((_, index) => (
        <AlertsPaginationBullet
          key={JSON.stringify(_)}
          index={index}
          activeIndex={activeIndex}
          alerts={alerts}
          controller={controller}
          themeName={themeName}
          tokens={tokens}
        />
      ))}
    </div>
  )
}

export default AlertsPagination
