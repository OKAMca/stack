import { tv } from 'tailwind-variants'
import button from '../Button'

const popoverPopover = tv({
  base: 'border-2 text-black p-4 bg-gray-300',
})

const popoverUnderlay = tv({})

const popoverArrow = tv({})

const popoverButton = tv({
  extend: button,
})

const popoverTheme = {
  popover: popoverPopover,
  underlay: popoverUnderlay,
  arrow: popoverArrow,
  button: popoverButton,
}

export default popoverTheme
