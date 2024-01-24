'use client'

import { useSidePanel } from '../../providers/SidePanel'
import RenderWithOpacity from '../../transitions/RenderWithOpacity'
import Box from '../Box'
import InnerContent from './components/InnerContent'
import type TMenuProps from './interface'

const Menu = (props: TMenuProps) => {
  const {
    id = 'main-menu',
    children,
    TransitionAnimation = RenderWithOpacity,
    PanelTransition = RenderWithOpacity,
    themeName,
    tokens,
    customTheme,
    ...rest
  } = props
  const { overlayState } = useSidePanel()

  return (
    <PanelTransition isVisible={overlayState?.isOpen}>
      <Box themeName={`${themeName}.sidePanel.wrapper`}>
        <TransitionAnimation isVisible={overlayState?.isOpen}>
          <Box themeName={`${themeName}.sidePanel.container`}>
            <Box themeName={`${themeName}.sidePanel.innerContent`}>
              <InnerContent id={id} themeName={themeName} tokens={tokens} customTheme={customTheme} {...rest}>
                {children}
              </InnerContent>
            </Box>
          </Box>
        </TransitionAnimation>
      </Box>
    </PanelTransition>
  )
}

export default Menu
