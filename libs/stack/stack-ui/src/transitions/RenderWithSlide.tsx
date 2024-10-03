'use client'

import { animated, useTransition } from '@react-spring/web'
import React from 'react'

interface TProps {
  isVisible: boolean
  children: React.ReactNode
}

const RenderWithSlide = ({ isVisible, children }: TProps) => {
  const transition = useTransition(isVisible, {
    from: { opacity: 0, translateX: '100%' },
    enter: { opacity: 1, translateX: '0%' },
    leave: { opacity: 0, translateX: '25%' },
  })

  return transition((styles, bool) => bool && <animated.div style={styles}>{children}</animated.div>)
}

export default RenderWithSlide
