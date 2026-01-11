import { animated, config, useTransition } from '@react-spring/web'
import useThemeContext from '../providers/Theme/hooks'
import type { TTransition } from '../types/components'

// Cast animated.div to accept children prop for React 19 type compatibility
// react-spring types don't include children in AnimatedProps with @types/react@19
// See: https://github.com/pmndrs/react-spring/issues/1572
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedDiv = animated.div as React.FC<any>

const ModalTransition = ({ isVisible, children, themeName, tokens, customTheme }: TTransition) => {
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
        <AnimatedDiv
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
        </AnimatedDiv>
      ),
  )
}

export default ModalTransition
