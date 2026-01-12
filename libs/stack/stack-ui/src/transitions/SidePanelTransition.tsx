import { animated, config, useTransition } from '@react-spring/web'
import useThemeContext from '../providers/Theme/hooks'
import type { TTransition } from '../types/components'

const fixed: 'absolute' | 'relative' | 'fixed' = 'fixed'

const SidePanelTransition = ({ isVisible, children, themeName, tokens, customTheme }: TTransition) => {
  const theme = useThemeContext(themeName, tokens, customTheme)
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

  return transition(
    (styles, bool) =>
      bool && (
        <animated.div className={theme} style={styles}>
          {children}
        </animated.div>
      ),
  )
}

export default SidePanelTransition
