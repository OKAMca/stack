'use client'

import type { TMenuItemProps, TMenuItemsProps } from '../interface'
import * as React from 'react'
import { useCallback, useRef } from 'react'
import { useMenu } from '../../../providers/Menu'
import { Box } from '../../Box'
import { Anchor, Button } from '../../Button'

function ButtonElement(menuItem: TMenuItemProps) {
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
    ariaLabel: legacyAriaLabel,
    'aria-label': ariaLabel,
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
      key={`button-${id}`}
      {...rest}
      themeName={`${themeName}`}
      tokens={tokens}
      customTheme={customTheme}
      handlePress={handlePress}
      as={as}
      aria-label={ariaLabel ?? legacyAriaLabel}
    >
      {React.isValidElement(children) ? children : label}
    </Button>
  )
}

function LinkElement(menuItem: TMenuItemProps) {
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
    ariaLabel: legacyAriaLabel,
    'aria-label': ariaLabel,
    ...rest
  } = menuItem
  const ref = useRef(null)

  if (path == null || label == null) {
    return null
  }

  return (
    <Anchor
      key={`link-${id}`}
      {...rest}
      themeName={`${themeName}`}
      tokens={tokens}
      customTheme={customTheme}
      nextLinkProps={{
        href: path,
        ...nextLinkProps,
      }}
      ref={ref}
      target={target ?? '_self'}
      as={as}
      aria-label={ariaLabel ?? legacyAriaLabel}
    >
      {React.isValidElement(children) ? children : label}
    </Anchor>
  )
}

function MenuItems(props: TMenuItemsProps) {
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
              {elementType === 'button'
                ? (
                    <ButtonElement
                      {...rest}
                      {...menuItem}
                      themeName={`${themeName}.button`}
                      tokens={menuItemTokens}
                      customTheme={customTheme}
                      as={as ?? buttonLinkComponent}
                    />
                  )
                : (
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
