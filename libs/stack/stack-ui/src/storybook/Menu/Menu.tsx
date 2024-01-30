import { Item } from '@react-stately/collections'
import { isEmpty } from 'radash'
import type { ComponentType } from 'react'
import React from 'react'
import Button, { ButtonWithForwardRef } from '../../components/Button'
import type { TButtonProps } from '../../components/Button/interface'
import MenuItems from '../../components/Menu/components/MenuItems'
import type { TMenuItemProps, TMenuProps, TMenuSidePanelProps } from '../../components/Menu/interface'
import MenuSidePanel from '../../components/Menu/MenuSidePanel'
import Typography from '../../components/Typography'
import { MenuContextProvider, useMenu } from '../../providers/Menu'
import { useSidePanel } from '../../providers/SidePanel'
import RenderWithOpacity from '../../transitions/RenderWithOpacity'
import RenderWithSlide from '../../transitions/RenderWithSlide'
import { items } from './mock'

export type TSubMenuTab = {
  key: string
  title: string
  childItems?: TMenuItemProps[] | null
  extra: React.ReactNode | undefined
}

export type TSubMenuExtraData = {
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

export const BackBtn = ({ label }: TButtonProps & { label?: string }) => {
  const { tabState, defaultSelectedKey } = useMenu()
  const { setSelectedKey } = tabState

  return <Button handlePress={() => setSelectedKey?.(defaultSelectedKey)}>{label}</Button>
}

export const CloseBtn = () => {
  const { tabState, defaultSelectedKey } = useMenu()
  const { buttonProps, overlayState } = useSidePanel()
  const { closeButtonProps, closeButtonRef } = buttonProps
  const { isOpen } = overlayState

  const handlePress = (e: React.MouseEvent<HTMLButtonElement>) => {
    tabState?.setSelectedKey?.(defaultSelectedKey)
    closeButtonProps?.onClick?.(e)
  }

  const updatedCloseButtonProps = { ...closeButtonProps, onClick: handlePress }

  return (
    isOpen && (
      <ButtonWithForwardRef type="button" {...updatedCloseButtonProps} ref={closeButtonRef} aria-label="CloseButton">
        Close
      </ButtonWithForwardRef>
    )
  )
}

export const ShowTab = ({ children }: { children: React.ReactNode }) => (
  <div>
    <div>
      <BackBtn label="SHOWS" />
      <CloseBtn />
    </div>
    <Typography>{children}</Typography>
  </div>
)

export const CloseBtnRender = () => <CloseBtn />

export const MenuFactory = ({
  menuItems,
  tabs,
  id,
  defaultIsOpen,
  openBtn = null,
  MenuComponent,
}: {
  tabs: JSX.Element[]
  id: string
  menuItems?: TMenuItemProps[] | null
  defaultIsOpen?: boolean
  openBtn?: React.ReactNode | null
  MenuComponent: ComponentType<TMenuProps | TMenuSidePanelProps>
}) => {
  const { tabState, defaultSelectedKey } = useMenu()

  const handleCloseMenu = () => {
    if (defaultSelectedKey != null) {
      tabState?.setSelectedKey?.(defaultSelectedKey)
    }
  }

  return (
    <MenuContextProvider
      defaultIsOpen={defaultIsOpen}
      closeBtn={CloseBtnRender}
      openBtn={SidePanelControl}
      defaultSelectedKey="empty"
      onCloseCallback={handleCloseMenu}
      tabs={tabs}
    >
      <>
        {openBtn}
        <MenuComponent
          id={id}
          TransitionAnimation={RenderWithSlide as (props: unknown) => JSX.Element}
          PanelTransition={RenderWithOpacity as (props: unknown) => JSX.Element}
        >
          <MenuItems menuItems={menuItems} />
        </MenuComponent>
      </>
    </MenuContextProvider>
  )
}

export const menuTabs = (
  menu: TMenuItemProps[],
  extras?: TSubMenuExtraData[],
  MenuComponent: ComponentType<TMenuProps> = MenuSidePanel,
) => {
  const tabs: TSubMenuTab[] = [{ key: 'empty', title: 'empty', childItems: null, extra: null }]

  const recursiveFilter = (x: TMenuItemProps) => {
    if (x.path?.startsWith('#')) {
      const extra = extras?.find((f) => x.path === f.path)
      tabs.push({ key: x.path.substring(1), title: x.label ?? x.path, childItems: x.childItems, extra: extra?.data })
    }
  }

  menu.forEach(recursiveFilter)

  return tabs.map(({ childItems, key, title }) => {
    const childTabs = isEmpty(childItems) ? undefined : menuTabs(childItems ?? [], extras, MenuComponent)
    return (
      <Item key={key} title={title}>
        <MenuFactory
          defaultIsOpen
          id={`menu-${title}`}
          tabs={childTabs ?? []}
          menuItems={childItems}
          MenuComponent={MenuComponent}
        />
      </Item>
    )
  })
}

const MenuContent = () => {
  const extras: TSubMenuExtraData[] = [
    {
      path: '#shows',
      data: (
        <ShowTab>
          <div>Hello World</div>
        </ShowTab>
      ),
    },
  ]
  const tabs = menuTabs(items, extras)

  return (
    <MenuFactory
      MenuComponent={MenuSidePanel}
      openBtn={<SidePanelControl />}
      id="main-menu"
      tabs={tabs}
      menuItems={items}
    />
  )
}

export default MenuContent
