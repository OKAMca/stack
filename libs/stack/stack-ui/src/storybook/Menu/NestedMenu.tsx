import type { TSubMenuExtraData } from './Menu'
import Menu from '../../components/Menu/Menu'
import { MenuFactory, menuTabs, ShowTab, SidePanelControl } from './Menu'
import { items } from './mock'

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
  const tabs = menuTabs(items, extras, Menu)

  return (
    <MenuFactory MenuComponent={Menu} openBtn={<SidePanelControl />} id="main-menu" tabs={tabs} menuItems={items} />
  )
}

export default MenuContent
