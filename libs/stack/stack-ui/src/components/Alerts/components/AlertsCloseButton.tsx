import type { Ref } from 'react'
import { forwardRef } from 'react'
import { CloseBtn, Icon } from '../../..'
import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'

const AlertsCloseButton = forwardRef((props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
  const { themeName = 'alerts.closeBtn', ...rest } = props

  return (
    <ButtonWithForwardRef ref={ref} themeName={themeName} {...rest}>
      <Icon icon={<CloseBtn />} />
    </ButtonWithForwardRef>
  )
})

AlertsCloseButton.displayName = 'AlertsCloseButton'

export default AlertsCloseButton
