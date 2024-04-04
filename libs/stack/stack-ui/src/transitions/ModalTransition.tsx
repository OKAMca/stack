import React from 'react'
import { animated, config, useTransition } from 'react-spring'

interface TProps {
  isVisible: boolean
  children: React.ReactNode
}

const ModalTransition = ({ isVisible, children }: TProps) => {
  const transition = useTransition(isVisible, {
    from: { opacity: 0, scale: 0.75 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.75 },
    config: config.stiff,
  })

  return transition(
    (styles, bool) =>
      bool && (
        <animated.div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1000,
            width: '100%',
            height: '100%',
            ...styles,
          }}
        >
          {children}
        </animated.div>
      ),
  )
}

export default ModalTransition
