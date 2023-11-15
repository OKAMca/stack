import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useMenu } from '../../providers/Menu'
import Button from '../Button'
import type { MenuItem, TMenuItemsProps } from './MenuItems.inteface'

const ButtonElement = (menuItem: MenuItem) => {
  const { tabState } = useMenu()
  const { setSelectedKey } = tabState
  const { id, path, label } = menuItem
  const itemKey = path?.substring(1)

  const handlePress = () => {
    if (itemKey == null) {
      return
    }

    setSelectedKey(itemKey)
  }

  return (
    <Button key={`button-${id}`} handlePress={handlePress}>
      {label}
    </Button>
  )
}

const LinkElement = (menuItem: MenuItem) => {
  const { id, target, path, label } = menuItem
  const { tabState } = useMenu()

  if (path == null || label == null) {
    return null
  }

  return (
    <NextLink href={path} passHref scroll={false}>
      <Button key={`link-${id}`} as="a" target={target ?? '_self'}>
        {label}
      </Button>
    </NextLink>
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
