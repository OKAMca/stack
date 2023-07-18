import React from 'react'
import { useMenuTrigger } from 'react-aria'
import { useMenuTriggerState } from 'react-stately'
import { ButtonWithForwardRef } from '../../../Button'
import { BasePopover } from '../../../Popover'
import type { IMenuButtonProps } from '../../interface'
import Menu from '../Menu'

const MenuButton = <T extends object>(props: IMenuButtonProps<T>) => {
  const { themeName = 'menu', customTheme, tokens, dismissButton, buttonOptions, placement = 'bottom' } = props

  const state = useMenuTriggerState(props)

  // Get props for the button and menu elements
  const ref = React.useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref)

  const listDirection = placement === 'bottom' || placement === 'top' ? 'column' : 'row'

  return (
    <>
      <ButtonWithForwardRef
        themeName={`${themeName}.menuTrigger`}
        tokens={buttonOptions?.buttonTokens}
        {...menuTriggerProps}
        ref={ref}
      >
        {buttonOptions?.buttonContent}
      </ButtonWithForwardRef>
      {state.isOpen && (
        <BasePopover state={state} triggerRef={ref} placement={placement}>
          <Menu
            {...props}
            {...menuProps}
            popoverState={state}
            themeName={themeName}
            tokens={{ ...tokens, listDirection }}
            customTheme={customTheme}
            dismissButton={dismissButton}
          />
        </BasePopover>
      )}
    </>
  )
}

export default MenuButton
