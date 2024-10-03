'use client'

import { animated, useTransition } from '@react-spring/web'
import React from 'react'
import useThemeContext from '../providers/Theme/hooks'
import type { TTransition } from '../types/components'

const RenderWithSlide = ({ isVisible, children, themeName, tokens, customTheme }: TTransition) => {
  const theme = useThemeContext(themeName, tokens, customTheme)
  const transition = useTransition(isVisible, {
    from: { opacity: 0, translateX: '100%' },
    enter: { opacity: 1, translateX: '0%' },
    leave: { opacity: 0, translateX: '25%' },
  })

  return transition(
    (styles, bool) =>
      bool && (
        <animated.div className={theme} style={styles}>
          {children}
        </animated.div>
      ),
  )
}

export default RenderWithSlide
