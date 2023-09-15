/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */

'use client'

import type { RefObject } from 'react'
import React, { useRef } from 'react'
import { FocusRing, useButton, useLink } from 'react-aria'
import useThemeContext from '../../providers/Theme/hooks'
import type { TButtonProps } from './interface'

const Anchor = React.forwardRef((props: TButtonProps, forwardRef: React.Ref<HTMLButtonElement & HTMLAnchorElement>) => {
  const { as: Component = 'a', handlePress, children, as, customTheme, tokens, themeName = 'button', ...rest } = props

  const ref = forwardRef
  const { linkProps } = useLink(
    { ...props, elementType: as?.toString(), onPress: handlePress },
    (forwardRef as RefObject<HTMLElement>) ?? ref,
  )

  const theme = useThemeContext(themeName, tokens, customTheme)

  return (
    <Component ref={ref} {...linkProps} {...rest} className={theme}>
      {children}
    </Component>
  )
})

const Button = React.forwardRef((props: TButtonProps, forwardRef: React.Ref<HTMLButtonElement & HTMLAnchorElement>) => {
  const {
    as: Component = 'button',
    handlePress,
    children,
    as,
    customTheme,
    tokens,
    themeName = 'button',
    isDisabled = false,
    ...rest
  } = props
  const ref = forwardRef
  const { buttonProps } = useButton(
    { ...props, isDisabled, elementType: as, onPress: handlePress },
    (forwardRef as RefObject<HTMLElement>) ?? ref,
  )

  const theme = useThemeContext(themeName, tokens, customTheme)

  return (
    <FocusRing focusRingClass="focus-ring">
      <Component ref={ref} {...buttonProps} {...rest} className={theme}>
        {children}
      </Component>
    </FocusRing>
  )
})

export const ButtonWithForwardRef = React.forwardRef(
  (props: TButtonProps, ref: React.Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { as } = props
    if (as === 'a') return <Anchor ref={ref} {...props} />
    return <Button ref={ref} {...props} />
  },
)

const ButtonComponent = (props: TButtonProps) => {
  const { as } = props
  const ref = useRef(null)
  if (as === 'a') return <Anchor ref={ref} {...props} />
  return <Button ref={ref} {...props} />
}

export default React.memo(ButtonComponent)
