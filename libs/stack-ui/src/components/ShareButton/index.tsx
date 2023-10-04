'use client'

import React, { useState } from 'react'
import { FocusScope, useFocusManager } from 'react-aria'
import useThemeContext from '../../providers/Theme/hooks'
import Button, { ButtonWithForwardRef } from '../Button'
import Icon from '../Icon'
import type { TIconsContainerProps, TShareButtonProps } from './interface'

export const IconsContainer = (props: TIconsContainerProps) => {
  const { sharingLinksList, id, isOpen, setIsOpen, onShare, themeName = 'shareButton', tokens, customTheme } = props

  const linksListTheme = useThemeContext(`${themeName}.linksList`, { ...tokens, isOpen }, customTheme)

  const focusManager = useFocusManager()

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
    const { listDirection } = tokens ?? {}

    if (listDirection === 'row') {
      if (e.key === 'ArrowRight') {
        focusManager.focusNext({ wrap: true })
        e.preventDefault()
      }
      if (e.key === 'ArrowLeft') {
        focusManager.focusPrevious({ wrap: true })
        e.preventDefault()
      }
    }
    if (listDirection === 'column') {
      if (e.key === 'ArrowDown') {
        focusManager.focusNext({ wrap: true })
        e.preventDefault()
      }
      if (e.key === 'ArrowUp') {
        focusManager.focusPrevious({ wrap: true })
        e.preventDefault()
      }
    }
  }

  return (
    <div className={linksListTheme} id={id} role="listbox" tabIndex={-1} onKeyDown={handleKeyDown}>
      {sharingLinksList?.map((link) => {
        const { ariaLabel, onClick, href, icon, key } = link

        return (
          <Button
            key={key}
            themeName={`${themeName}.link`}
            tokens={{ ...tokens, isOpen }}
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
    <FocusScope autoFocus restoreFocus contain={isOpen}>
      <div className={containerTheme}>
        <ButtonWithForwardRef
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
        </ButtonWithForwardRef>
        {isOpen && (
          <IconsContainer
            id={id}
            sharingLinksList={sharingLinksList}
            onShare={onShare}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            themeName={themeName}
            customTheme={customTheme}
            tokens={tokens}
          />
        )}
      </div>
    </FocusScope>
  )
}
export default ShareButton
