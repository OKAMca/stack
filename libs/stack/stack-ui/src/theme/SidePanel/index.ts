import { tv } from 'tailwind-variants'

export const sidePanelWrapper = tv({
  base: 'm-auto fixed right-0 top-0 bottom-0 w-full max-w-[512px] [&>div]:h-full',
})

export const sidePanelContainer = tv({ base: 'h-full w-full flex justify-end' })

export const sidePanelInnerContainer = tv({ base: 'bg-gray-300 h-full w-full overflow-y-auto' })
