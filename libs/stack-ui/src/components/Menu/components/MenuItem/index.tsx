import useThemeContext from 'libs/stack-ui/src/providers/Theme/hooks'
import React from 'react'
import { useMenuItem } from 'react-aria'
import type { IMenuItemProps } from '../../interface'

const MenuItem = (props: IMenuItemProps) => {
  // Get props for the menu item element

  const { item, state, themeName = 'menu', customTheme, tokens } = props

  const ref = React.useRef(null)
  const { menuItemProps, isSelected } = useMenuItem({ key: item.key }, state, ref)

  const itemTheme = useThemeContext(`${themeName}.menuItem`, tokens, customTheme)

  return (
    <li className={itemTheme} {...menuItemProps} ref={ref}>
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </li>
  )
}

export default MenuItem
