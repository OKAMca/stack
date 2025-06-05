'use client'

import { useRef } from 'react'
import { useOverlayTriggerState } from 'react-stately'
import useLabelledOverlay from '../../hooks/useLabelledOverlay'
import type { TToken } from '../../providers/Theme/interface'
import RenderWithOpacity from '../../transitions/RenderWithOpacity'
import Carousel from '../Carousel'
import AlertsCloseButton from './components/AlertsCloseButton'
import AlertsItem from './components/AlertsItem'
import type { TAlertsProps } from './interface'

const Alerts = <T extends TToken>(props: TAlertsProps<T>) => {
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
    children = AlertsItem,
    ...rest
  } = props

  const triggerRef = useRef(null)

  const state = useOverlayTriggerState({ ...props, defaultOpen })

  const { triggerProps, overlayProps } = useLabelledOverlay({ ...props, type: 'dialog' }, state, triggerRef)

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
      <Carousel themeName={themeName} tokens={tokens} {...rest} legacyBehavior>
        {children}
      </Carousel>
    </TransitionComponent>
  )
}

export default Alerts
