import { animated, config, useTransition } from '@react-spring/web'
import useThemeContext from '../providers/Theme/hooks'
import type { TTransition } from '../types/components'

const RenderWithOpacity = ({ isVisible, children, themeName, tokens, customTheme, ...rest }: TTransition) => {
  const transitionTheme = useThemeContext(themeName, tokens, customTheme)
  const transition = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  })

  return transition(
    (styles, bool) =>
      bool && (
        <animated.div {...rest} className={transitionTheme} style={styles}>
          {children}
        </animated.div>
      ),
  )
}

export default RenderWithOpacity
