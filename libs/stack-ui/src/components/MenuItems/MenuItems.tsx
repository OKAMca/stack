import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useRef } from 'react'
import { useMenu } from '../../providers/Menu'
import Button, { Anchor } from '../Button'
import type { MenuItem, TMenuItemsProps } from './MenuItems.inteface'

const ButtonElement = (menuItem: MenuItem) => {
  const { tabState, defaultSelectedKey } = useMenu()
  const { setSelectedKey } = tabState
  const { id, path, label } = menuItem
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
    <Button key={`button-${id}`} handlePress={handlePress}>
      {label}
    </Button>
  )
}

const LinkElement = (menuItem: MenuItem) => {
  const { id, target, path, label } = menuItem
  const ref = useRef(null)

  if (path == null || label == null) {
    return null
  }

  return (
    <Anchor
      nextLinkProps={{
        scroll: false,
        href: path,
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
  const { menuItems, children } = props
  const { asPath } = useRouter()

  return (
    <div>
      <div>
        {menuItems?.map((menuItem) => {
          if (menuItem?.path == null || menuItem.id == null) {
            return null
          }

          const elementType = menuItem.path?.charAt(0) === '#' ? 'button' : 'a'
          return (
            <div key={`li-${menuItem.id}`}>
              {elementType === 'button' ? (
                <ButtonElement {...menuItem} active={menuItem.path === asPath} />
              ) : (
                <LinkElement {...menuItem} active={menuItem.path === asPath} />
              )}
            </div>
          )
        })}
      </div>
      {children}
    </div>
  )
}

export default MenuItems
