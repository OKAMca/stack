import { useRef } from 'react'
import { useOverlayTriggerState } from 'react-stately'
import RenderWithOpacity from '../../transitions/RenderWithOpacity'
import Box from '../Box'
import useOverlayHook from '../Lightbox/hooks/overlay'
import AlertsCloseButton from './components/AlertsCloseButton'
import { AlertsNextNavigationButton, AlertsPrevNavigationButton } from './components/AlertsNavigationButton'
import AlertsSwiper from './components/AlertsSwiper'
import type { TAlertsProps } from './interface'

const Alerts = (props: TAlertsProps) => {
  const {
    themeName = 'alerts',
    tokens,
    customTheme,
    defaultOpen = true,
    closeButton: CloseButton = AlertsCloseButton,
    prevButton: PrevButton = AlertsPrevNavigationButton,
    nextButton: NextButton = AlertsNextNavigationButton,
    transitionComponent: TransitionComponent = RenderWithOpacity,
    closeButtonAriaLabel,
    isOpen,
    onOpenChange,
    setOpen,
    a11y,
    ...rest
  } = props

  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
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
        <PrevButton
          themeName={`${themeName}.navigationBtn`}
          tokens={tokens}
          ref={prevButtonRef}
          aria-label={a11y?.prevSlideMessage}
        />
        <AlertsSwiper
          themeName={themeName}
          tokens={tokens}
          navigation={{ prevEl: prevButtonRef.current, nextEl: nextButtonRef.current }}
          a11y={a11y}
          {...rest}
        />
        <NextButton
          themeName={`${themeName}.navigationBtn`}
          tokens={tokens}
          ref={nextButtonRef}
          aria-label={a11y?.nextSlideMessage}
        />
      </Box>
    </TransitionComponent>
  )
}

export default Alerts
