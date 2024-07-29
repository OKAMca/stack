import { tv } from 'tailwind-variants'
import typography from '../Typography'

const lightBoxWrapper = tv({
  base: 'focus-ring-black',
})

const lightBoxContainer = tv({
  base: `rounded-3xl overflow-hidden`,
})

const lightBoxCloseBtn = tv({
  base: `
    absolute
    xl:top-10
    xl:right-20
    lg:top-8
    lg:right-8
    z-[10000]
    top-4
    right-4
    size-10
    focus-ring-black
  `,
})

const lightBoxLabel = tv({
  extend: typography,
  base: 'sr-only',
})

const lightBoxModalUnderlay = tv({
  base: 'w-screen h-screen bg-black/50 absolute top-0 left-0 flex justify-center items-center',
})

const lightBoxModalOverlay = tv({
  base: '',
})

const lightBoxModalDialog = tv({
  base: 'flex flex-col gap-4 items-center',
})

const lightboxTheme = {
  wrapper: lightBoxWrapper,
  container: lightBoxContainer,
  label: lightBoxLabel,
  closeBtn: lightBoxCloseBtn,
  modal: {
    underlay: lightBoxModalUnderlay,
    overlay: lightBoxModalOverlay,
    dialog: lightBoxModalDialog,
  },
}

export default lightboxTheme
