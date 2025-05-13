import { useState } from 'react'
import Box from '../../components/Box'
import Button from '../../components/Button'
import type { TButtonProps } from '../../components/Button/interface'
import Lightbox from '../../components/Lightbox'
import type { TLightboxProps } from '../../components/Lightbox/interface'

const LightboxControlledState = (props: TLightboxProps) => {
  const { children, showTriggerButton = true, showCloseButton = true, ...rest } = props

  const [isOpen, setOpen] = useState(false)

  const closeButtonRender = (buttonProps: TButtonProps) => (
    <Button
      {...buttonProps}
      handlePress={(e) => {
        buttonProps?.handlePress?.(e)
        setOpen(!isOpen)
      }}
    >
      Close lightbox
    </Button>
  )

  return (
    <>
      <Button handlePress={() => setOpen(!isOpen)}>Open lightbox</Button>
      <Lightbox
        {...rest}
        isOpen={isOpen}
        setOpen={setOpen}
        closeButton={closeButtonRender}
        onOpenChange={() => setOpen(!isOpen)}
        showTriggerButton={showTriggerButton}
        showCloseButton={showCloseButton}
      >
        {children}
        {!showCloseButton && (
          <Box themeName="mt-4">
            <Button handlePress={() => setOpen(false)}>Custom Close Button</Button>
          </Box>
        )}
      </Lightbox>
    </>
  )
}

export default LightboxControlledState
