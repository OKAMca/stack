'use client'

import { useMenu } from '../../providers/Menu'
import { useSidePanel } from '../../providers/SidePanel'
import RenderWithOpacity from '../../transitions/RenderWithOpacity'
import Box from '../Box'
import InnerContent from './components/InnerContent'
import type TMenuProps from './interface'

const Menu = (props: TMenuProps) => {
  const {
    id = 'main-menu',
    children,
    PanelTransition = RenderWithOpacity,
    themeName,
    tokens,
    customTheme,
    ...rest
  } = props
  const { overlayState } = useSidePanel()
  const { closeBtn } = useMenu()

  return (
    <PanelTransition themeName={`${themeName}.panelTransition`} tokens={tokens} isVisible={overlayState?.isOpen}>
      <Box themeName={`${themeName}.wrapper`} tokens={tokens}>
        {closeBtn && closeBtn()}
        <Box themeName={`${themeName}.container`} tokens={tokens}>
          <InnerContent
            id={id}
            themeName={`${themeName}.innerContent`}
            tokens={tokens}
            customTheme={customTheme}
            {...rest}
          >
            {children}
          </InnerContent>
        </Box>
      </Box>
    </PanelTransition>
  )
}

export default Menu
