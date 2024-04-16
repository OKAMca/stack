'use client'

import { FocusRing } from '@react-aria/focus'
import { useOverlayTriggerState } from 'react-stately'
import Box from '../Box'
import Button from '../Button'
import type { TButtonProps } from '../Button/interface'
import Icon from '../Icon'
import Modal from '../Modal'
import Typography from '../Typography'
import useOverlayHook from './hooks/overlay'
import type { TLightboxProps } from './interface'

const LightboxCloseButton = (props: TButtonProps) => {
  const { themeName, tokens, children, ...rest } = props
  return (
    <Button themeName={themeName} tokens={tokens} {...rest}>
      <Icon icon="CloseBtn" />
    </Button>
  )
}

const Lightbox = (props: TLightboxProps) => {
  const {
    children,
    thumbnailContent,
    label,
    themeName = 'lightBox',
    tokens,
    closeButton: CloseButton = LightboxCloseButton,
    setOpen,
    isOpen,
    closeButtonAriaLabel,
  } = props

  const state = useOverlayTriggerState(props)

  const { openTriggerProps, triggerProps, overlayProps, labelProps } = useOverlayHook(
    { ...props, type: 'dialog' },
    state,
  )

  const handleOpen: TButtonProps['handlePress'] = (e) => {
    setOpen?.(!isOpen)
    openTriggerProps.handlePress?.(e)
  }

  return (
    <>
      <FocusRing focusRingClass="has-focus-ring" within>
        <Button themeName={`${themeName}.wrapper`} tokens={tokens} {...openTriggerProps} handlePress={handleOpen}>
          {label && (
            <Typography themeName={`${themeName}.label`} tokens={{ size: 'footnotes' }} {...labelProps}>
              {label}
            </Typography>
          )}
          {thumbnailContent}
        </Button>
      </FocusRing>
      <Modal themeName={`${themeName}.modal`} tokens={tokens} state={state} {...overlayProps}>
        <CloseButton
          themeName={`${themeName}.closeBtn`}
          tokens={tokens}
          aria-label={closeButtonAriaLabel}
          {...triggerProps}
        />
        <Box themeName={`${themeName}.container`} tokens={tokens}>
          {children}
        </Box>
      </Modal>
    </>
  )
}

export default Lightbox
