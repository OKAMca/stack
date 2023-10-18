import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import tw from 'twin.macro'
import { useSidePanel } from '../../providers/SidePanel'
import type { MenuItem, TMenuItemsProps } from './MenuItems.inteface'
import { StyledMenuButton, StyledMenuItems, StyledMenuList, StyledMenuWrapper } from './MenuItems.styles'

const ButtonElement = (menuItem: MenuItem) => {
  const { tabState } = useSidePanel()
  const { setSelectedKey, selectedKey } = tabState
  const { id, path, label } = menuItem
  const itemKey = path?.substring(1)

  const handlePress = () => {
    if (itemKey == null) {
      return
    }

    setSelectedKey(itemKey)
  }

  return (
    <StyledMenuButton
      key={`button-${id}`}
      handlePress={handlePress}
      buttonStyle="hollow"
      variant="white"
      css={itemKey === selectedKey && tw`bg-black text-white`}
    >
      {label}
    </StyledMenuButton>
  )
}

const LinkElement = (menuItem: MenuItem) => {
  const { id, target, path, label, active } = menuItem
  const { tabState } = useSidePanel()
  const { selectedKey } = tabState

  if (path == null || label == null) {
    return null
  }

  return (
    <NextLink href={path} passHref scroll={false}>
      <StyledMenuButton
        key={`link-${id}`}
        as="a"
        target={target ?? '_self'}
        buttonStyle="hollow"
        variant="white"
        css={active && selectedKey === 'open' && tw`bg-black text-white`}
      >
        {label}
      </StyledMenuButton>
    </NextLink>
  )
}

const MenuItems = (props: TMenuItemsProps) => {
  const { menuItems, children } = props
  const { asPath } = useRouter()

  return (
    <StyledMenuWrapper>
      <StyledMenuItems>
        {menuItems?.map((menuItem) => {
          if (menuItem?.path == null || menuItem.id == null) {
            return null
          }

          const elementType = menuItem.path?.charAt(0) === '#' ? 'button' : 'a'
          return (
            <StyledMenuList key={`li-${menuItem.id}`}>
              {elementType === 'button' ? (
                <ButtonElement {...menuItem} active={menuItem.path === asPath} />
              ) : (
                <LinkElement {...menuItem} active={menuItem.path === asPath} />
              )}
            </StyledMenuList>
          )
        })}
      </StyledMenuItems>
      {children}
    </StyledMenuWrapper>
  )
}

export default MenuItems
