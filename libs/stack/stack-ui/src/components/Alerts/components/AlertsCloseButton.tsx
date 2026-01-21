import type * as React from 'react'
import type { TAnchorProps } from '../../Button/interface'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import CloseBtn from '../../icons/CloseBtn'

interface AlertsCloseButtonProps extends TAnchorProps {
  ref?: React.Ref<HTMLElement>
}

function AlertsCloseButton({ ref, ...props }: AlertsCloseButtonProps) {
  const { themeName = 'alerts.closeBtn', ...rest } = props

  return (
    <ButtonWithForwardRef ref={ref} themeName={themeName} {...rest}>
      <Icon icon={<CloseBtn />} />
    </ButtonWithForwardRef>
  )
}

AlertsCloseButton.displayName = 'AlertsCloseButton'

export default AlertsCloseButton
