import type { TTransition } from '../types/components'
import { animated, useTransition } from '@react-spring/web'
import useThemeContext from '../providers/Theme/hooks'

function AccordionTransition(props: TTransition) {
  const { isVisible, children, themeName, tokens, customTheme, ...rest } = props
  const transition = useTransition(isVisible, {
    from: { gridTemplateRows: '0fr', paddingTop: '0', paddingBottom: '0' },
    enter: { gridTemplateRows: '1fr', paddingTop: '1rem', paddingBottom: '1rem' },
    leave: { gridTemplateRows: '0fr', paddingTop: '0', paddingBottom: '0' },
  })

  const transitionTheme = useThemeContext(themeName, tokens, customTheme)

  return transition((styles, bool) => {
    return (
      bool && (
        <animated.div {...rest} style={styles} className={transitionTheme}>
          {children}
        </animated.div>
      )
    )
  })
}

export default AccordionTransition
