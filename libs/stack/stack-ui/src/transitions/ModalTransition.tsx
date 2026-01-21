import type { TTransition } from '../types/components'
import { animated, config, useTransition } from '@react-spring/web'
import useThemeContext from '../providers/Theme/hooks'

function ModalTransition({ isVisible, children, themeName, tokens, customTheme }: TTransition) {
  const theme = useThemeContext(themeName, tokens, customTheme)

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
          className={theme}
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
