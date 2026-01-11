import { animated, useTransition } from '@react-spring/web'
import useThemeContext from '../providers/Theme/hooks'
import type { TTransition } from '../types/components'

// Cast animated.div to accept children prop for React 19 type compatibility
// react-spring types don't include children in AnimatedProps with @types/react@19
// See: https://github.com/pmndrs/react-spring/issues/1572
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedDiv = animated.div as React.FC<any>

const AccordionTransition = (props: TTransition) => {
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
        <AnimatedDiv {...rest} style={styles} className={transitionTheme}>
          {children}
        </AnimatedDiv>
      )
    )
  })
}

export default AccordionTransition
