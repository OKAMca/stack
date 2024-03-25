import { useState } from 'react'
import Button from '../../components/Button'
import Lightbox from '../../components/Lightbox'
import type { TLightboxProps } from '../../components/Lightbox/interface'

const LightboxControlledState = (props: TLightboxProps) => {
  const { children, ...rest } = props

  const [isOpen, setOpen] = useState(false)

  const closeButtonRender: TLightboxProps['closeButton'] = (buttonProps) => (
    <Button {...buttonProps} handlePress={() => setOpen(!isOpen)}>
      Close lightbox
    </Button>
  )

  return (
    <>
      <Button handlePress={() => setOpen(!isOpen)}>Open lightbox</Button>
      <Lightbox {...rest} isOpen={isOpen} setOpen={setOpen} closeButton={closeButtonRender}>
        {children}
      </Lightbox>
    </>
  )
}

export default LightboxControlledState
