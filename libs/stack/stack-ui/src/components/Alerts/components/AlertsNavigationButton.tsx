import type { Ref } from 'react'
import { forwardRef } from 'react'
import { FocusRing } from 'react-aria'
import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import Icon from '../../Icon'

const AlertsNavigationButton = forwardRef((props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
  const { themeName = 'alerts.navigationBtn', tokens, customTheme, children, ...rest } = props

  return (
    <FocusRing within focusRingClass="has-focus-ring">
      <ButtonWithForwardRef themeName={themeName} tokens={tokens} ref={ref} {...rest}>
        {children}
      </ButtonWithForwardRef>
    </FocusRing>
  )
})

export const AlertsNextNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    return (
      <AlertsNavigationButton {...props} ref={ref}>
        <Icon icon="ArrowRight" />
      </AlertsNavigationButton>
    )
  },
)

export const AlertsPrevNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    return (
      <AlertsNavigationButton {...props} ref={ref}>
        <Icon icon="ArrowLeft" />
      </AlertsNavigationButton>
    )
  },
)

AlertsNavigationButton.displayName = 'AlertsNavigationButton'
AlertsNextNavigationButton.displayName = 'AlertsNextNavigationButton'
AlertsPrevNavigationButton.displayName = 'AlertsPrevNavigationButton'

export default AlertsNavigationButton
