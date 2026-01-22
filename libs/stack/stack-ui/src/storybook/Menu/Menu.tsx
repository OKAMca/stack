import type { ComponentType, JSX, ReactNode } from 'react'
import type { PressEvent } from 'react-aria'
import type { TButtonProps } from '../../components/Button/interface'
import type { TMenuItemProps, TMenuProps, TMenuSidePanelProps } from '../../components/Menu/interface'
import { isEmpty } from 'radashi'
import { Item } from 'react-stately'
import { Button, ButtonWithForwardRef } from '../../components/Button'
import MenuItems from '../../components/Menu/components/MenuItems'
import MenuSidePanel from '../../components/Menu/MenuSidePanel'
import { Typography } from '../../components/Typography'
import { MenuContextProvider, useMenu } from '../../providers/Menu'
import { useSidePanel } from '../../providers/SidePanel'
import RenderWithSlide from '../../transitions/RenderWithSlide'
import { items } from './mock'

export interface TSubMenuTab {
  key: string
  title: string
  childItems?: TMenuItemProps[] | null
  extra: ReactNode | undefined
}

export interface TSubMenuExtraData {
  path: string
  data: ReactNode
}

export function SidePanelControl() {
  const { buttonProps } = useSidePanel()

  return (
    <ButtonWithForwardRef {...buttonProps?.openButtonProps} ref={buttonProps?.openButtonRef}>
      Open
    </ButtonWithForwardRef>
  )
}

export function BackBtn({ label }: TButtonProps & { label?: string }) {
  const { tabState, defaultSelectedKey } = useMenu()
  const { setSelectedKey } = tabState

  return <Button handlePress={() => setSelectedKey?.(defaultSelectedKey)}>{label}</Button>
}

export function CloseBtn() {
  const { tabState, defaultSelectedKey } = useMenu()
  const { buttonProps, overlayState } = useSidePanel()
  const { closeButtonProps, closeButtonRef } = buttonProps
  const { isOpen } = overlayState

  const handlePress = (e: PressEvent) => {
    tabState?.setSelectedKey?.(defaultSelectedKey)
    closeButtonProps?.handlePress?.(e)
  }

  const updatedCloseButtonProps = { ...closeButtonProps, handlePress }

  return (
    isOpen && (
      <ButtonWithForwardRef type="button" {...updatedCloseButtonProps} ref={closeButtonRef} aria-label="CloseButton">
        Close
      </ButtonWithForwardRef>
    )
  )
}

export function ShowTab({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>
        <BackBtn label="SHOWS" />
        <CloseBtn />
      </div>
      <Typography>{children}</Typography>
    </div>
  )
}

export const CloseBtnRender = () => <CloseBtn />

export function MenuFactory({
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
  openBtn?: ReactNode | null
  MenuComponent: ComponentType<TMenuProps | TMenuSidePanelProps>
}) {
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
        <MenuComponent id={id} TransitionAnimation={RenderWithSlide as (_props: unknown) => JSX.Element}>
          <MenuItems menuLinkComponent="a" menuItems={menuItems} />
        </MenuComponent>
      </>
    </MenuContextProvider>
  )
}

export function menuTabs(menu: TMenuItemProps[], extras?: TSubMenuExtraData[], MenuComponent: ComponentType<TMenuProps> = MenuSidePanel) {
  const tabs: TSubMenuTab[] = [{ key: 'empty', title: 'empty', childItems: null, extra: null }]

  const recursiveFilter = (x: TMenuItemProps) => {
    if (x.path?.startsWith('#')) {
      const extra = extras?.find(f => x.path === f.path)
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

function MenuContent() {
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
