'use client'

import type { TToken } from '../../providers/Theme/interface'
import type { TButtonProps } from '../Button/interface'
import type { TLightboxProps } from './interface'
import { FocusRing } from 'react-aria'
import { useOverlayTriggerState } from 'react-stately'
import useLabelledOverlay from '../../hooks/useLabelledOverlay'
import { Box } from '../Box'
import { Button } from '../Button'
import Icon from '../Icon'
import Modal from '../Modal'
import { Typography } from '../Typography'

function LightboxCloseButton(props: TButtonProps) {
  const { themeName, tokens, children, ...rest } = props
  return (
    <Button themeName={themeName} tokens={tokens} {...rest}>
      <Icon icon="CloseBtn" />
    </Button>
  )
}

function Lightbox<T extends TToken>(props: TLightboxProps<T>) {
  const {
    children,
    thumbnailContent,
    label,
    themeName = 'lightBox',
    tokens,
    closeButton: CloseButton = LightboxCloseButton,
    closeButtonAriaLabel,
    transitionComponent,
    showTriggerButton = true,
    showCloseButton = true,
  } = props

  const state = useOverlayTriggerState(props)

  const { openTriggerProps, triggerProps, overlayProps, labelProps } = useLabelledOverlay(
    { ...props, type: 'dialog' },
    state,
  )

  return (
    <>
      {showTriggerButton && (
        <FocusRing focusRingClass="has-focus-ring" within>
          <Button themeName={`${themeName}.wrapper`} tokens={tokens} {...openTriggerProps}>
            {label && (
              <Typography themeName={`${themeName}.label`} tokens={tokens} {...labelProps}>
                {label}
              </Typography>
            )}
            {thumbnailContent}
          </Button>
        </FocusRing>
      )}
      <Modal
        themeName={`${themeName}.modal`}
        tokens={tokens}
        state={state}
        {...overlayProps}
        transitionComponent={transitionComponent}
      >
        {showCloseButton && (
          <CloseButton
            themeName={`${themeName}.closeBtn`}
            tokens={tokens}
            aria-label={closeButtonAriaLabel}
            {...triggerProps}
          />
        )}
        <Box themeName={`${themeName}.container`} tokens={tokens}>
          {children}
        </Box>
      </Modal>
    </>
  )
}

export default Lightbox
