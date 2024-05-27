import { tv } from 'tailwind-variants'
import button from '../Button'
import typography from '../Typography'

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

const alertsSwiperSwiper = tv({
  base: 'bg-color-1-300 m-2 rounded-lg',
})

const alertsSwiperWrapper = tv({
  base: 'm-4',
})

const alertsItemWrapper = tv({
  base: '',
})

const alertsItemContainer = tv({
  base: '',
})

const alertsItemTitle = tv({
  extend: typography,
  defaultVariants: {
    size: 'h1',
  },
})

const alertsItemContent = tv({
  extend: typography,
})

const alertsItemIcon = tv({
  base: 'block w-min bg-color-1-400 p-2 rounded-lg',
})

const alertsTheme = {
  wrapper: alertsWrapper,
  container: alertsContainer,
  navigationBtn: alertsNavigationBtn,
  closeBtn: alertsCloseBtn,
  swiper: {
    swiper: alertsSwiperSwiper,
    wrapper: alertsSwiperWrapper,
  },
  item: {
    wrapper: alertsItemWrapper,
    contaienr: alertsItemContainer,
    title: alertsItemTitle,
    content: alertsItemContent,
    icon: alertsItemIcon,
  },
}

export default alertsTheme
