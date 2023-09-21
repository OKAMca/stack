'use client'

import { FocusRing } from '@react-aria/focus'
import useThemeContext from '../../providers/Theme/hooks'
import { ButtonWithForwardRef } from '../Button'
import Icon from '../Icon'
import Modal from '../Modal'
import Typography from '../Typography'
import useOverlayHook from './hooks/overlay'
import type { LightboxProps } from './interface'

const Lightbox = (props: LightboxProps) => {
  const {
    children,
    thumbnailContent,
    isOpen,
    onOpenCallBack,
    onCloseCallBack,
    label,
    themeName = 'lightBox',
    tokens,
    customTheme,
  } = props

  const { state, openButtonRef, openButtonProps, closeButtonProps, closeButtonRef } = useOverlayHook(
    isOpen,
    onOpenCallBack,
    onCloseCallBack,
  )

  const containerTheme = useThemeContext(`${themeName}.container`, tokens, customTheme)

  return (
    <div>
      <FocusRing focusRingClass="has-focus-ring" within>
        <ButtonWithForwardRef
          ref={openButtonRef}
          themeName={`${themeName}.wrapper`}
          {...openButtonProps}
          {...(isOpen ? { tabIndex: -1 } : {})}
        >
          {label && (
            <Typography themeName={`${themeName}.label`} tokens={{ size: 'footnotes' }}>
              {label}
            </Typography>
          )}
          {thumbnailContent}
        </ButtonWithForwardRef>
      </FocusRing>
      <Modal onCloseCallBack={onCloseCallBack} state={state}>
        <div>
          <ButtonWithForwardRef
            themeName={`${themeName}.closeBtn`}
            type="button"
            {...closeButtonProps}
            ref={closeButtonRef}
          >
            <Icon icon="CloseBtn" />
          </ButtonWithForwardRef>
          <div className={containerTheme}>{children}</div>
        </div>
      </Modal>
    </div>
  )
}

export default Lightbox
