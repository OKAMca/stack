'use client'

import { FocusRing } from '@react-aria/focus'
import { useOverlayTriggerState } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
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

const Lightbox = <T extends TToken>(props: TLightboxProps<T>) => {
  const {
    children,
    thumbnailContent,
    label,
    themeName = 'lightBox',
    tokens,
    closeButton: CloseButton = LightboxCloseButton,
    closeButtonAriaLabel,
    transitionComponent,
  } = props

  const state = useOverlayTriggerState(props)

  const { openTriggerProps, triggerProps, overlayProps, labelProps } = useOverlayHook(
    { ...props, type: 'dialog' },
    state,
  )

  return (
    <>
      <FocusRing focusRingClass="has-focus-ring" within>
        <Button themeName={`${themeName}.wrapper`} tokens={tokens} {...openTriggerProps}>
          {label && (
            <Typography themeName={`${themeName}.label`} tokens={{ size: 'footnotes' }} {...labelProps}>
              {label}
            </Typography>
          )}
          {thumbnailContent}
        </Button>
      </FocusRing>
      <Modal
        themeName={`${themeName}.modal`}
        tokens={tokens}
        state={state}
        {...overlayProps}
        transitionComponent={transitionComponent}
      >
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
