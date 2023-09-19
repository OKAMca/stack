'use client'

import { useState } from 'react'
import useThemeContext from '../../providers/Theme/hooks'
import Button from '../Button'
import Icon from '../Icon'
import type { TIconsContainerProps, TShareButtonProps } from './interface'

export const IconsContainer = (props: TIconsContainerProps) => {
  const { sharingLinksList, id, isOpen, onShare, themeName = 'shareButton', tokens, customTheme } = props

  const linksListTheme = useThemeContext(`${themeName}.linksList`, { ...tokens, isOpen }, customTheme)

  return (
    <div className={linksListTheme} id={id} role="listbox">
      {sharingLinksList?.map((link) => {
        const { ariaLabel, onClick, href, icon, key } = link

        return (
          <Button
            themeName={`${themeName}.link`}
            tokens={{ ...tokens, isOpen }}
            key={key}
            handlePress={() => {
              onShare?.(key)
              onClick?.(key)
            }}
            aria-label={ariaLabel}
            {...(href ? { href, rel: 'noopener noreferrer', target: '_blank', as: 'a' } : {})}
            role="option"
          >
            <Icon themeName={`${themeName}.linkIcons`} icon={icon} />
          </Button>
        )
      })}
    </div>
  )
}

const ShareButton = (props: TShareButtonProps) => {
  const {
    ariaLabel,
    icon,
    id,
    sharingLinksList,
    onShare,
    customTheme,
    themeName = 'shareButton',
    tokens,
    ...rest
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const containerTheme = useThemeContext(`${themeName}.container`, tokens, customTheme)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={containerTheme}>
      <Button
        themeName={`${themeName}.button`}
        tokens={{ ...tokens, isOpen }}
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls="share-buttons"
        handlePress={handleClick}
        {...rest}
      >
        <Icon themeName={`${themeName}.icon`} icon={icon ?? 'Share'} />
      </Button>
      <IconsContainer
        id={id}
        sharingLinksList={sharingLinksList}
        onShare={onShare}
        isOpen={isOpen}
        themeName={themeName}
        customTheme={customTheme}
        tokens={tokens}
      />
    </div>
  )
}
export default ShareButton
