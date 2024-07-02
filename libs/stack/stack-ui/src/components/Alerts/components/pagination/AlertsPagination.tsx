import { FocusScope } from 'react-aria'
import Box from '../../../Box'
import type { TAlertsPaginationProps } from '../../interface'
import AlertsPaginationBullet from './AlertsPaginationBullet'

const AlertsPagination = (props: TAlertsPaginationProps) => {
  const { themeName, tokens, alerts, activeIndex, paginationGroupLabel } = props

  return (
    <Box
      as="div"
      themeName={`${themeName}.wrapper`}
      tokens={tokens}
      {...{ role: 'group', 'aria-label': paginationGroupLabel }}
    >
      <FocusScope>
        {alerts.map((_, index) => (
          <AlertsPaginationBullet
            key={JSON.stringify(_)}
            index={index}
            activeIndex={activeIndex}
            alerts={alerts}
            themeName={themeName}
            tokens={tokens}
          />
        ))}
      </FocusScope>
    </Box>
  )
}

export default AlertsPagination
