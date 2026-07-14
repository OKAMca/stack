import type { TToken } from '../../providers/Theme/interface'
import { tv } from 'tailwind-variants'

export const imgStyles = tv({
  base: 'object-contain',
  variants: {
    fit: {
      contain: 'object-contain',
      cover: 'object-cover',
    },
  },
})

export const imgTheme = (props: TToken) => imgStyles(props)
