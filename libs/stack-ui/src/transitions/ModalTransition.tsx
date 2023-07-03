import React from 'react'
import { animated, config, useTransition } from 'react-spring'

const fixed: 'absolute' | 'relative' | 'fixed' = 'fixed'

interface TProps {
  isVisible: boolean
  children: React.ReactNode
}

const ModalTransition = ({ isVisible, children }: TProps) => {
  const transition = useTransition(isVisible, {
    from: {
      opacity: 0,
      scale: 0.75,
      position: fixed,
      left: 0,
      top: 0,
      zIndex: 1000,
      bottom: 0,
      height: '100%',
      width: '100%',
    },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.75 },
    config: config.stiff,
  })

  return transition((styles, bool) => bool && <animated.div style={styles}>{children}</animated.div>)
}

export default ModalTransition
