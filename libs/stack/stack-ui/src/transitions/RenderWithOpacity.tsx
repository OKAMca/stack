import React from 'react'
import { animated, config, useTransition } from 'react-spring'

interface TProps {
  isVisible: boolean
  children: React.ReactNode
}

const RenderWithOpacity = ({ isVisible, children }: TProps) => {
  const transition = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  })

  return transition((styles, bool) => bool && <animated.div style={styles}>{children}</animated.div>)
}

export default RenderWithOpacity
