import { useState } from 'react'
import Button from '../../components/Button'
import type { TButtonProps } from '../../components/Button/interface'
import Lightbox from '../../components/Lightbox'
import type { TLightboxProps } from '../../components/Lightbox/interface'

const LightboxControlledState = (props: TLightboxProps) => {
  const { children, ...rest } = props

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
      >
        {children}
      </Lightbox>
    </>
  )
}

export default LightboxControlledState
