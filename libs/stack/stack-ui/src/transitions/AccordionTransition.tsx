import { animated, useTransition } from 'react-spring'
import useThemeContext from '../providers/Theme/hooks'
import type { TTransition } from '../types/components'

const AccordionTransition = ({ isVisible, children, themeName, tokens, customTheme }: TTransition) => {
  const transition = useTransition(isVisible, {
    from: { gridTemplateRows: '0fr', paddingTop: '0', paddingBottom: '0' },
    enter: { gridTemplateRows: '1fr', paddingTop: '1rem', paddingBottom: '1rem' },
    leave: { gridTemplateRows: '0fr', paddingTop: '0', paddingBottom: '0' },
  })

  const transitionTheme = useThemeContext(themeName, tokens, customTheme)

  return transition((styles, bool) => {
    return (
      bool && (
        <animated.div style={styles} className={transitionTheme}>
          {children}
        </animated.div>
      )
    )
  })
}

export default AccordionTransition
