import { tv } from 'tailwind-variants'
import button from '../Button'

const alertsWrapper = tv({
  base: 'bg-color-1-200 p-4 flex flex-col gap-4',
})

const alertsContainer = tv({
  base: 'flex justify-between items-center gap-4',
})

const alertsNavigationBtn = tv({
  extend: button,
})

const alertsCloseBtn = tv({
  extend: button,
  base: 'self-end',
})

const alertsTheme = {
  wrapper: alertsWrapper,
  container: alertsContainer,
  navigationBtn: alertsNavigationBtn,
  closeBtn: alertsCloseBtn,
}

export default alertsTheme
