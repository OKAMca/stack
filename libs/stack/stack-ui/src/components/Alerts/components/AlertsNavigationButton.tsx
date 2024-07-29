import type { Ref } from 'react'
import { forwardRef } from 'react'
import { FocusRing, usePress } from 'react-aria'
import { useSwiperController } from '../../../providers/Swiper'
import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import Icon from '../../Icon'

type TAlertsNavigationButtonProps = TButtonProps & {
  onSubmit?: () => void
}

const AlertsNavigationButton = forwardRef(
  (props: TAlertsNavigationButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { themeName = 'alerts.navigationBtn', tokens, customTheme, children, onSubmit, ...rest } = props
    const { isDisabled } = rest

    const { pressProps } = usePress({
      onPress: () => onSubmit?.(),
    })

    return (
      <FocusRing within focusRingClass="has-focus-ring">
        <ButtonWithForwardRef
          themeName={themeName}
          tokens={tokens}
          ref={ref}
          {...pressProps}
          {...rest}
          {...{ 'aria-disabled': isDisabled }}
        >
          {children}
        </ButtonWithForwardRef>
      </FocusRing>
    )
  },
)

export const AlertsNextNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { controller } = useSwiperController()

    const disabled = controller?.activeIndex === (controller?.slides?.length ?? 1) - 1

    return (
      <AlertsNavigationButton onSubmit={() => controller?.slideNext()} {...props} ref={ref} isDisabled={disabled}>
        <Icon icon="ArrowRight" />
      </AlertsNavigationButton>
    )
  },
)

export const AlertsPrevNavigationButton = forwardRef(
  (props: TButtonProps, ref: Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { controller } = useSwiperController()

    const disabled = controller?.activeIndex === 0

    return (
      <AlertsNavigationButton onSubmit={() => controller?.slidePrev()} {...props} ref={ref} isDisabled={disabled}>
        <Icon icon="ArrowLeft" />
      </AlertsNavigationButton>
    )
  },
)

AlertsNavigationButton.displayName = 'AlertsNavigationButton'
AlertsNextNavigationButton.displayName = 'AlertsNextNavigationButton'
AlertsPrevNavigationButton.displayName = 'AlertsPrevNavigationButton'

export default AlertsNavigationButton
