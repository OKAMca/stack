import { useState } from 'react'
import { Item } from 'react-stately'
import Button from '../Button'
import Icon from '../Icon'
import MenuButton from '../Menu/components/MenuButton'
import type { TShareButtonProps } from './interface'

const ShareButton = (props: TShareButtonProps) => {
  const {
    ariaLabel,
    icon,
    sharingLinksList,
    onShare,
    customTheme,
    themeName = 'shareButton',
    tokens,
    placement,
  } = props

  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuButton
      aria-label={ariaLabel}
      placement={placement}
      themeName={themeName}
      tokens={{ ...tokens, isOpen }}
      customTheme={customTheme}
      dismissButton={{
        buttonContent: <Icon themeName={`${themeName}.icon`} icon={icon ?? 'Share'} />,
      }}
      buttonOptions={{
        buttonContent: <Icon themeName={`${themeName}.icon`} icon={icon ?? 'Share'} />,
      }}
      onAction={onShare}
      onOpenChange={(openState) => setIsOpen(openState)}
    >
      {sharingLinksList?.map((sharingLink) => {
        const { key, icon: linkIcon, ariaLabel: linkAriaLabel, as = 'a', href } = sharingLink

        return (
          <Item key={key} aria-label={linkAriaLabel}>
            <Button themeName={`${themeName}.menuItemButton`} as={as} href={href}>
              <Icon themeName={`${themeName}.linkIcons`} icon={linkIcon} />
            </Button>
          </Item>
        )
      })}
    </MenuButton>
  )
}
export default ShareButton
