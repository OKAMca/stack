import type { Ref } from 'react'
import { forwardRef } from 'react'
import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import Icon from '../../Icon'
import CloseBtn from '../../icons/CloseBtn'

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
