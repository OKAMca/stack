import { tv } from 'tailwind-variants'
import type { TToken } from '../../providers/Theme/interface'

export const imgStyles = tv({
  base: 'object-contain',
})

export const imgTheme = (props: TToken) => imgStyles(props)
