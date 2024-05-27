import type { Ref } from 'react'
import { forwardRef } from 'react'
import { FocusRing } from 'react-aria'
import useThemeContext from '../../../providers/Theme/hooks'
import type { TButtonProps } from '../../Button/interface'
import Icon from '../../Icon'

const AlertsNavigationButton = forwardRef((props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
  const { themeName = 'alerts.navigationBtn', tokens, customTheme, children, ...rest } = props

  const theme = useThemeContext(themeName, tokens, customTheme)

  return (
    <FocusRing within focusRingClass="has-focus-ring">
      <button className={theme} ref={ref} type="button" {...rest}>
        {children}
      </button>
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
