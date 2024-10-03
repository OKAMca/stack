'use client'

import { useMenu } from '../../providers/Menu'
import { useSidePanel } from '../../providers/SidePanel'
import type { TToken } from '../../providers/Theme/interface'
import RenderWithOpacity from '../../transitions/RenderWithOpacity'
import Box from '../Box'
import InnerContent from './components/InnerContent'
import type TMenuProps from './interface'

const Menu = <T extends TToken>(props: TMenuProps<T>) => {
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
    <PanelTransition isVisible={overlayState?.isOpen}>
      <Box themeName={`${themeName}.wrapper`}>
        {closeBtn && closeBtn()}
        <Box themeName={`${themeName}.container`}>
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
