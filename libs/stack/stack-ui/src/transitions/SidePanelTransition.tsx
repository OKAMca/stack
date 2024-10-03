import { animated, config, useTransition } from '@react-spring/web'
import React from 'react'

const fixed: 'absolute' | 'relative' | 'fixed' = 'fixed'

interface TProps {
  isVisible: boolean
  children: React.ReactNode
}

const SidePanelTransition = ({ isVisible, children }: TProps) => {
  const transition = useTransition(isVisible, {
    from: {
      opacity: 0,
      position: fixed,
      left: 0,
      top: 0,
      zIndex: 1000,
      bottom: 0,
      height: '100%',
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  })

  return transition((styles, bool) => bool && <animated.div style={styles}>{children}</animated.div>)
}

export default SidePanelTransition
