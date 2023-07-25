'use client'

import React, { useState } from 'react'
import useThemeContext from '../../providers/Theme/hooks'
import Button from '../Button'
import Icon from '../Icon'
import type { TAccordionProps } from './interface'

const Accordion = (props: TAccordionProps) => {
  const { customTheme, themeName = 'accordion', id, tokens, title, ariaLabel, onClick, icon, children } = props

  const [isOpen, setIsOpen] = useState(false)

  const containerTheme = useThemeContext(`${themeName}.container`, { ...tokens, isOpen }, customTheme)
  const titleTheme = useThemeContext(`${themeName}.title`, { ...tokens, isOpen }, customTheme)
  const iconTheme = useThemeContext(`${themeName}.icon`, { ...tokens, isOpen }, customTheme)
  const regionTheme = useThemeContext(`${themeName}.region`, { ...tokens, isOpen }, customTheme)
  const contentTheme = useThemeContext(`${themeName}.content`, { ...tokens, isOpen }, customTheme)

  return (
    <div
      className={containerTheme}
      id={`accordion-control-${id}`}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${id}`}
    >
      <Button
        themeName={`${themeName}.button`}
        tokens={{ ...tokens, isOpen }}
        handlePress={() => {
          setIsOpen(!isOpen)
          onClick?.(isOpen)
        }}
        as="button"
        id={`accordion-control-${id}`}
        aria-label={ariaLabel}
      >
        <div className={titleTheme}>{title}</div>
        <div className={iconTheme}>
          <Icon icon={icon ?? 'ArrowDown'} />
        </div>
      </Button>
      <div
        className={regionTheme}
        role="region"
        id={`accordion-content-${id}`}
        aria-labelledby={`accordion-control-${id}`}
      >
        <section className={contentTheme}>{children}</section>
      </div>
    </div>
  )
}

export default Accordion
