import NextLink from 'next/link'
import React, { useCallback, useRef } from 'react'
import { useMenu } from '../../../providers/Menu'
import Box from '../../Box'
import Button, { Anchor } from '../../Button'
import type { MenuItemProps, TMenuItemsProps } from '../interface'

const ButtonElement = (menuItem: MenuItemProps) => {
  const { tabState, defaultSelectedKey } = useMenu()
  const { setSelectedKey } = tabState
  const { id, path, label, themeName = 'button', tokens, customTheme, target, ...rest } = menuItem
  const itemKey = path?.substring(1)

  const handlePress = useCallback(() => {
    if (itemKey == null) {
      return
    }

    if (tabState.selectedKey === itemKey) {
      setSelectedKey(defaultSelectedKey)
      return
    }

    setSelectedKey(itemKey)
  }, [itemKey, tabState.selectedKey, setSelectedKey, defaultSelectedKey])

  return (
    <Button
      {...rest}
      themeName={`${themeName}`}
      tokens={tokens}
      customTheme={customTheme}
      key={`button-${id}`}
      handlePress={handlePress}
    >
      {label}
    </Button>
  )
}

const LinkElement = (menuItem: MenuItemProps) => {
  const { id, target, path, label, themeName = 'anchor', customTheme, tokens, nextLinkProps, ...rest } = menuItem
  const ref = useRef(null)

  if (path == null || label == null) {
    return null
  }

  return (
    <Anchor
      {...rest}
      themeName={`${themeName}`}
      tokens={tokens}
      customTheme={customTheme}
      nextLinkProps={{
        scroll: false,
        href: path,
        ...nextLinkProps,
      }}
      ref={ref}
      key={`link-${id}`}
      as={NextLink}
      target={target ?? '_self'}
    >
      {label}
    </Anchor>
  )
}

const MenuItems = (props: TMenuItemsProps) => {
  const { menuItems, children, themeName = 'menuItem', tokens, customTheme } = props

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme}>
      <Box themeName={`${themeName}.container`} tokens={tokens} customTheme={customTheme}>
        {menuItems?.map((menuItem) => {
          const { id, path, label, ...rest } = menuItem ?? {}

          if (menuItem?.path == null || menuItem.id == null) {
            return null
          }

          const elementType = menuItem.path?.startsWith('#') ? 'button' : 'a'
          return (
            <Box
              themeName={`${themeName}.innerContent`}
              tokens={tokens}
              customTheme={customTheme}
              key={`li-${menuItem.id}`}
            >
              {elementType === 'button' ? (
                <ButtonElement
                  {...rest}
                  {...menuItem}
                  themeName={`${themeName}.button`}
                  tokens={tokens}
                  customTheme={customTheme}
                />
              ) : (
                <LinkElement
                  {...rest}
                  {...menuItem}
                  themeName={`${themeName}.anchor`}
                  tokens={tokens}
                  customTheme={customTheme}
                />
              )}
            </Box>
          )
        })}
      </Box>
      {children}
    </Box>
  )
}

export default MenuItems
