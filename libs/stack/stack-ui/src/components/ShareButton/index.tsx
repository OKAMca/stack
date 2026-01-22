'use client'

import type { KeyboardEventHandler } from 'react'
import type { PressEvent } from 'react-aria'
import type { TToken } from '../../providers/Theme/interface'
import type { TIconsContainerProps, TShareButtonProps } from './interface'
import { useState } from 'react'
import { FocusScope, useFocusManager } from 'react-aria'
import useThemeContext from '../../providers/Theme/hooks'
import { Button, ButtonWithForwardRef } from '../Button'
import Icon from '../Icon'

export function IconsContainer<T extends TToken>(props: TIconsContainerProps<T>) {
  const { sharingLinksList, id, isOpen, setIsOpen, onShare, themeName = 'shareButton', tokens, customTheme } = props

  const linksListTheme = useThemeContext(`${themeName}.linksList`, { ...tokens, isOpen }, customTheme)

  const focusManager = useFocusManager()

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
    const { listDirection } = tokens ?? {}

    if (listDirection === 'row') {
      if (e.key === 'ArrowRight') {
        focusManager?.focusNext({ wrap: true })
        e.preventDefault()
      }
      if (e.key === 'ArrowLeft') {
        focusManager?.focusPrevious({ wrap: true })
        e.preventDefault()
      }
    }
    if (listDirection === 'column') {
      if (e.key === 'ArrowDown') {
        focusManager?.focusNext({ wrap: true })
        e.preventDefault()
      }
      if (e.key === 'ArrowUp') {
        focusManager?.focusPrevious({ wrap: true })
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
            {...((href != null && href !== '') ? { href, rel: 'noopener noreferrer', target: '_blank', as: 'a' } : {})}
            role="option"
          >
            <Icon themeName={`${themeName}.linkIcons`} icon={icon} />
          </Button>
        )
      })}
    </div>
  )
}

export function ShareButton(props: TShareButtonProps) {
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

  const handleClick = (e: PressEvent) => {
    setIsOpen(!isOpen)
    if (isOpen) {
      return
    }
    setTimeout(() => {
      const firstOption = e.target.parentElement?.lastChild?.firstChild as HTMLElement
      firstOption?.focus()
    })
  }

  const handleKeyDown: KeyboardEventHandler = (e) => {
    const openShareButton = e.currentTarget.firstChild as HTMLElement
    const listBox = e.currentTarget.lastChild as HTMLElement
    const firstOption = listBox.firstChild as HTMLElement

    const lastOption = listBox.lastChild as HTMLElement

    const { listDirection } = tokens ?? {}

    if (listDirection === 'row') {
      if (e.key === 'ArrowRight' && e.target === openShareButton) {
        firstOption?.focus()
        e.preventDefault()
      }
      if (e.key === 'ArrowLeft' && e.target === openShareButton) {
        lastOption.focus()
        e.preventDefault()
      }
    }

    if (listDirection === 'column') {
      if (e.key === 'ArrowDown' && e.target === openShareButton) {
        firstOption?.focus()
        e.preventDefault()
      }
      if (e.key === 'ArrowUp' && e.target === openShareButton) {
        lastOption.focus()
        e.preventDefault()
      }
    }

    if (e.key === 'Escape') {
      setIsOpen(false)
      openShareButton?.focus()
    }
    if (document.activeElement === listBox) {
      openShareButton?.focus()
    }
  }

  return (
    <FocusScope autoFocus restoreFocus contain={isOpen}>
      <div className={containerTheme} onKeyDown={handleKeyDown}>
        <ButtonWithForwardRef
          themeName={`${themeName}.button`}
          tokens={{ ...tokens, isOpen }}
          aria-label={ariaLabel}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          {...(isOpen && { 'aria-controls': id })}
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
