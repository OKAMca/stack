import { createCtx } from '@okam/core-lib'
import { useMemo } from 'react'
import { useTabListState } from 'react-stately'
import { SidePanelContextProvider } from '../SidePanel'
import type { IMenuProviderProps, TMenuContext } from './interface'

export const [useMenu, MenuProvider] = createCtx<TMenuContext>()

export function MenuContextProvider({
  children,
  defaultSelectedKey,
  tabs,
  openBtn,
  closeBtn,
  ...rest
}: IMenuProviderProps) {
  const tabState = useTabListState({ ...rest, children: tabs, defaultSelectedKey })
  const value = useMemo<TMenuContext>(
    () => ({ openBtn, closeBtn, tabState, defaultSelectedKey }),
    [openBtn, closeBtn, tabState, defaultSelectedKey],
  )

  return (
    <MenuProvider value={value}>
      <SidePanelContextProvider defaultSelectedKey={defaultSelectedKey.toString()}>{children}</SidePanelContextProvider>
    </MenuProvider>
  )
}
