import { Item } from '@react-stately/collections'
import React from 'react'
import Button, { ButtonWithForwardRef } from '../../components/Button'
import type { TButtonProps } from '../../components/Button/interface'
import Menu from '../../components/Menu/Menu'
import MenuItems from '../../components/MenuItems/MenuItems'
import type { MenuItem } from '../../components/MenuItems/MenuItems.inteface'
import Typography from '../../components/Typography'
import { MenuContextProvider, useMenu } from '../../providers/Menu'
import { useSidePanel } from '../../providers/SidePanel'
import RenderWithSlide from '../../transitions/RenderWithSlide'
import type { Maybe } from '../../types/components'
import { items } from './mock'

type TSubMenuTab = {
  key: string
  title: string
  childItems: Maybe<MenuItem[] | undefined>
  extra: React.ReactNode | undefined
}

type TSubMenuExtraData = {
  path: string
  data: React.ReactNode
}

export const SidePanelControl = () => {
  const { buttonProps } = useSidePanel()

  return (
    <ButtonWithForwardRef {...buttonProps?.openButtonProps} ref={buttonProps?.openButtonRef}>
      Open
    </ButtonWithForwardRef>
  )
}

const BackBtn = ({ label }: TButtonProps & { label?: string }) => {
  const { tabState, defaultSelectedKey } = useMenu()
  const { setSelectedKey } = tabState

  return <Button handlePress={() => setSelectedKey(defaultSelectedKey)}>{label}</Button>
}

const CloseBtn = () => {
  const { buttonProps } = useSidePanel()
  const { closeButtonProps, closeButtonRef } = buttonProps
  return (
    <ButtonWithForwardRef type="button" {...closeButtonProps} ref={closeButtonRef} aria-label="CloseButton">
      Close
    </ButtonWithForwardRef>
  )
}

const ShowTab = ({ children }: { children: React.ReactNode }) => (
  <div>
    <div>
      <BackBtn label="SHOWS" />
      <CloseBtn />
    </div>
    <Typography>{children}</Typography>
  </div>
)

const menuTabs = (menu: MenuItem[], extras?: TSubMenuExtraData[]) => {
  const tabs: TSubMenuTab[] = [{ key: 'empty', title: 'empty', childItems: null, extra: null }]

  const recursiveFilter = (x: MenuItem) => {
    if (x.path?.startsWith('#')) {
      const extra = extras?.find((f) => x.path === f.path)
      tabs.push({ key: x.path.substring(1), title: x.label ?? x.path, childItems: x.childItems, extra: extra?.data })
    }

    if (x?.childItems != null) {
      x.childItems.forEach(recursiveFilter)
    }
  }

  menu.forEach(recursiveFilter)

  return tabs.map(({ childItems, key, title, extra }) => (
    <Item key={key} title={title}>
      {extra != null && extra}
      <MenuItems menuItems={childItems} />
    </Item>
  ))
}

const CloseBtnRender = () => <CloseBtn />

const TabBackButton = () => {
  const { tabState, defaultSelectedKey } = useMenu()
  return <Button handlePress={() => tabState.setSelectedKey(defaultSelectedKey)}>Retour</Button>
}

const MenuContent = () => {
  const extras: TSubMenuExtraData[] = [
    {
      path: '#subPanel',
      data: (
        <ShowTab>
          <div>Hello World</div>
        </ShowTab>
      ),
    },
  ]
  const tabs = menuTabs(items, extras)

  return (
    <MenuContextProvider closeBtn={CloseBtnRender} openBtn={SidePanelControl} defaultSelectedKey="empty" tabs={tabs}>
      <>
        <SidePanelControl />
        <Menu id="main-menu" beforeTabContent={<TabBackButton />} TransitonAnimation={RenderWithSlide}>
          <MenuItems menuItems={items} />
        </Menu>
      </>
    </MenuContextProvider>
  )
}

export default MenuContent
