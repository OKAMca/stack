'use client'

import React, { useCallback, useRef } from 'react'
import { useMenu } from '../../../providers/Menu'
import Box from '../../Box'
import Button, { Anchor } from '../../Button'
import type { TMenuItemProps, TMenuItemsProps } from '../interface'

const ButtonElement = (menuItem: TMenuItemProps) => {
  const { tabState, defaultSelectedKey } = useMenu()
  const { setSelectedKey } = tabState
  const {
    id,
    path,
    label,
    themeName = 'button',
    tokens,
    customTheme,
    target,
    children,
    childItems,
    as,
    ...rest
  } = menuItem
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
      as={as}
    >
      {React.isValidElement(children) ? children : label}
    </Button>
  )
}

const LinkElement = (menuItem: TMenuItemProps) => {
  const {
    id,
    target,
    path,
    label,
    themeName = 'anchor',
    customTheme,
    tokens,
    nextLinkProps,
    children,
    as,
    childItems,
    ...rest
  } = menuItem
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
        href: path,
        ...nextLinkProps,
      }}
      ref={ref}
      key={`link-${id}`}
      target={target ?? '_self'}
      as={as}
    >
      {React.isValidElement(children) ? children : label}
    </Anchor>
  )
}

const MenuItems = (props: TMenuItemsProps) => {
  const {
    menuItems,
    children,
    themeName = 'menuItem',
    tokens,
    customTheme,
    menuLinkComponent,
    buttonLinkComponent,
  } = props

  return (
    <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme}>
      <Box themeName={`${themeName}.container`} tokens={tokens} customTheme={customTheme}>
        {menuItems?.map((menuItem) => {
          const { id, path, label, as, ...rest } = menuItem ?? {}

          const menuItemTokens = { ...tokens, ...menuItem.tokens }

          if (menuItem?.path == null || menuItem.id == null) {
            return null
          }

          const elementType = menuItem.path?.startsWith('#') ? 'button' : 'a'
          return (
            <Box
              themeName={`${themeName}.innerContent`}
              tokens={menuItemTokens}
              customTheme={customTheme}
              key={`li-${menuItem.id}`}
            >
              {elementType === 'button' ? (
                <ButtonElement
                  {...rest}
                  {...menuItem}
                  themeName={`${themeName}.button`}
                  tokens={menuItemTokens}
                  customTheme={customTheme}
                  as={as ?? buttonLinkComponent}
                />
              ) : (
                <LinkElement
                  {...rest}
                  {...menuItem}
                  themeName={`${themeName}.anchor`}
                  tokens={menuItemTokens}
                  customTheme={customTheme}
                  as={as ?? menuLinkComponent}
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
