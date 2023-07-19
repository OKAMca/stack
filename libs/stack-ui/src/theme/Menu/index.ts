import { tv } from 'tailwind-variants'
import type { TToken } from '../../providers/Theme/interface'
import button from '../Button'
import typography from '../Typography'

const menuTrigger = tv({
  extend: button,
})

const menuSectionSeparator = tv({
  base: 'border-t border-black py-1 px-2',
})

const menuSectionHeading = tv({
  extend: typography,
  base: 'font-bold text-center px-2 py-4',
})

const menuSectionList = tv({
  base: 'p-0 list-none',
})

const menuList = tv({
  base: '',
})

const menuListContainer = tv({
  base: 'bg-color-1-200 rounded',
})

const menuItem = tv({
  base: 'px-8 py-2 hover:bg-color-1-300',
})

export const menuTheme = {
  menuSectionSeparator: (props: TToken) => menuSectionSeparator(props),
  menuSectionHeading: (props: TToken) => menuSectionHeading(props),
  menuSectionList: (props: TToken) => menuSectionList(props),
  menuTrigger: (props: TToken) => menuTrigger(props),
  menuList: (props: TToken) => menuList(props),
  menuListContainer: (props: TToken) => menuListContainer(props),
  menuItem: (props: TToken) => menuItem(props),
}
