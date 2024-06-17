import type { Ref } from 'react'
import { forwardRef } from 'react'
import { FocusRing, usePress } from 'react-aria'
import { useAlertsController } from '../../../providers/Alerts'
import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import Icon from '../../Icon'

type TAlertsNavigationButtonProps = TButtonProps & {
  onSubmit?: () => void
}

const AlertsNavigationButton = forwardRef(
  (props: TAlertsNavigationButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { themeName = 'alerts.navigationBtn', tokens, customTheme, children, onSubmit, ...rest } = props

    const { pressProps } = usePress({
      onPress: () => onSubmit?.(),
    })

    return (
      <FocusRing within focusRingClass="has-focus-ring">
        <ButtonWithForwardRef themeName={themeName} tokens={tokens} ref={ref} {...pressProps} {...rest}>
          {children}
        </ButtonWithForwardRef>
      </FocusRing>
    )
  },
)

export const AlertsNextNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { controller } = useAlertsController()

    return (
      <AlertsNavigationButton onSubmit={() => controller?.slideNext()} {...props} ref={ref}>
        <Icon icon="ArrowRight" />
      </AlertsNavigationButton>
    )
  },
)

export const AlertsPrevNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { controller } = useAlertsController()

    return (
      <AlertsNavigationButton onSubmit={() => controller?.slidePrev()} {...props} ref={ref}>
        <Icon icon="ArrowLeft" />
      </AlertsNavigationButton>
    )
  },
)

AlertsNavigationButton.displayName = 'AlertsNavigationButton'
AlertsNextNavigationButton.displayName = 'AlertsNextNavigationButton'
AlertsPrevNavigationButton.displayName = 'AlertsPrevNavigationButton'

export default AlertsNavigationButton
