import { useRef } from 'react'
import { useOverlayTriggerState } from 'react-stately'
import RenderWithOpacity from '../../transitions/RenderWithOpacity'
import Box from '../Box'
import useOverlayHook from '../Lightbox/hooks/overlay'
import AlertsCloseButton from './components/AlertsCloseButton'
import AlertsSwiper from './components/AlertsSwiper'
import type { TAlertsProps } from './interface'

const Alerts = (props: TAlertsProps) => {
  const {
    themeName = 'alerts',
    tokens,
    customTheme,
    defaultOpen = true,
    closeButton: CloseButton = AlertsCloseButton,
    transitionComponent: TransitionComponent = RenderWithOpacity,
    closeButtonAriaLabel,
    isOpen,
    onOpenChange,
    setOpen,
    ...rest
  } = props

  const triggerRef = useRef(null)

  const state = useOverlayTriggerState({ ...props, defaultOpen })

  const { triggerProps, overlayProps } = useOverlayHook({ ...props, type: 'dialog' }, state, triggerRef)

  return (
    <TransitionComponent
      {...overlayProps}
      role="alert"
      themeName={`${themeName}.wrapper`}
      tokens={tokens}
      isVisible={state.isOpen}
    >
      <CloseButton
        ref={triggerRef}
        themeName={`${themeName}.closeBtn`}
        aria-label={closeButtonAriaLabel}
        {...triggerProps}
      />
      <Box themeName={`${themeName}.container`} tokens={tokens}>
        <AlertsSwiper themeName={themeName} tokens={tokens} {...rest} />
      </Box>
    </TransitionComponent>
  )
}

export default Alerts
