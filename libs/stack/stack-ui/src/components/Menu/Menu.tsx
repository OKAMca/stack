'use client'

import type { TToken } from '../../providers/Theme/interface'
import type TMenuProps from './interface'
import { useMenu } from '../../providers/Menu'
import { useSidePanel } from '../../providers/SidePanel'
import RenderWithOpacity from '../../transitions/RenderWithOpacity'
import { Box } from '../Box'
import InnerContent from './components/InnerContent'

function Menu<T extends TToken>(props: TMenuProps<T>) {
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
        {closeBtn != null && closeBtn()}
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
