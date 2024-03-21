import { animated, config, useTransition } from 'react-spring'
import useThemeContext from '../providers/Theme/hooks'
import type { TTransition } from '../types/components'

const RenderWithOpacity = ({ isVisible, children, themeName, tokens, customTheme }: TTransition) => {
  const transition = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  })

  const transitionTheme = useThemeContext(themeName, tokens, customTheme)

  return transition(
    (styles, bool) =>
      bool && (
        <animated.div className={transitionTheme} style={styles}>
          {children}
        </animated.div>
      ),
  )
}

export default RenderWithOpacity
