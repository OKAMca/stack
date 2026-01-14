'use client'

import { useRef } from 'react'
import { useLandmark } from 'react-aria'
import type { TToken } from '../../providers/Theme/interface'
import { BoxWithForwardRef } from '../Box'
import Button from '../Button'
import type { TSkipToMainProps, TMainProps } from './interface'

/**
 * SkipToMain Component
 * A skip link that allows keyboard users to quickly navigate to the main content.
 * Should be used at the top of the page layout.
 */
const SkipToMain = <T extends TToken>({
  href = '#main',
  themeName = 'skipToMain',
  tokens,
  customTheme,
  children,
  ariaLabel,
  ...rest
}: TSkipToMainProps<T>) => {
  return (
    <Button
      as="a"
      href={href}
      themeName={themeName}
      tokens={tokens}
      customTheme={customTheme}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </Button>
  )
}

/**
 * Main Component
 * The main content landmark region. Should wrap the primary content of the page.
 * Uses react-aria's useLandmark hook for enhanced keyboard navigation (F6/Shift+F6).
 */
export const Main = <T extends TToken>({
  as = 'main',
  id = 'main',
  tabIndex = -1,
  themeName = 'main',
  tokens,
  customTheme,
  children,
  ...rest
}: TMainProps<T>) => {
  const ref = useRef<HTMLElement>(null)
  const { landmarkProps } = useLandmark(
    {
      role: 'main',
    },
    ref,
  )

  return (
    <BoxWithForwardRef
      as={as}
      id={id}
      themeName={themeName}
      tokens={tokens}
      customTheme={customTheme}
      ref={ref}
      {...rest}
      {...landmarkProps}
      tabIndex={tabIndex}
    >
      {children}
    </BoxWithForwardRef>
  )
}

SkipToMain.displayName = 'SkipToMain'
Main.displayName = 'Main'

export default SkipToMain
