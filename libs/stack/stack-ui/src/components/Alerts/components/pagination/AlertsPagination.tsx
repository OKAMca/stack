import Box from '../../../Box'
import type { TAlertsPaginationProps } from '../../interface'
import AlertsPaginationBullet from './AlertsPaginationBullet'

const AlertsPagination = (props: TAlertsPaginationProps) => {
  const { themeName, tokens, controller, alerts, activeIndex, paginationGroupLabel } = props

  return (
    <Box
      as="div"
      themeName={`${themeName}.wrapper`}
      tokens={tokens}
      {...{ role: 'group', 'aria-label': paginationGroupLabel }}
    >
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
    </Box>
  )
}

export default AlertsPagination
