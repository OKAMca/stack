import useThemeContext from 'libs/stack-ui/src/providers/Theme/hooks'
import React from 'react'
import { useMenu } from 'react-aria'
import { useTreeState } from 'react-stately'
import Button from '../../../Button'
import type { IMenuProps } from '../../interface'
import MenuItem from '../MenuItem'
import MenuSection from '../MenuSection'

const Menu = <T extends object>(props: IMenuProps<T>) => {
  const { themeName = 'menu', customTheme, tokens, dismissButton, popoverState } = props

  const containerTheme = useThemeContext(`${themeName}.menuListContainer`, tokens, customTheme)
  const listTheme = useThemeContext(`${themeName}.menuList`, tokens, customTheme)

  const state = useTreeState(props)
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  return (
    <div className={containerTheme}>
      {dismissButton && (
        <Button
          themeName={`${themeName}.menuTrigger`}
          handlePress={() => popoverState.close()}
          tokens={dismissButton?.buttonTokens}
        >
          {dismissButton?.buttonContent}
        </Button>
      )}
      <ul {...menuProps} ref={ref} className={listTheme}>
        {[...state.collection].map((item) =>
          item.type === 'section' ? (
            <MenuSection
              key={item.key}
              section={item}
              state={state}
              themeName={themeName}
              tokens={tokens}
              customTheme={customTheme}
            />
          ) : (
            <MenuItem
              key={item.key}
              item={item}
              state={state}
              themeName={themeName}
              tokens={tokens}
              customTheme={customTheme}
            />
          ),
        )}
      </ul>
    </div>
  )
}

export default Menu
