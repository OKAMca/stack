/* eslint-disable react/display-name */

'use client'

import type { RefObject } from 'react'
import React, { useRef } from 'react'
import { FocusRing, useButton, useLink } from 'react-aria'
import useThemeContext from '../../providers/Theme/hooks'
import type { TToken } from '../../providers/Theme/interface'
import type { NextLinkProps } from '../../types/next-link'
import type { TAnchorProps, TAnchorRef, TButtonProps, TButtonRef } from './interface'

export const Anchor = React.forwardRef((props: TAnchorProps, forwardRef: TAnchorRef) => {
  const {
    as: Component = 'a',
    handlePress,
    children,
    as,
    customTheme,
    tokens,
    themeName = 'button',
    nextLinkProps: { onClick, ...nextLinkProps } = {} as NextLinkProps,
    ...rest
  } = props

  const ref = forwardRef
  const { linkProps } = useLink(
    {
      ...props,
      ...nextLinkProps,
      onClick: ({ currentTarget, ...e }) => {
        onClick?.({
          ...e,
          // @ts-expect-error Mismatch between react-aria and next/link. Happens since react-aria >3.36
          currentTarget,
        })
      },
      href: props.href ?? nextLinkProps?.href?.toString(),
      elementType: as?.toString(),
      onPress: handlePress,
    },
    (forwardRef as RefObject<HTMLElement>) ?? ref,
  )

  const theme = useThemeContext(themeName, tokens, customTheme)

  return (
    <FocusRing focusRingClass="has-focus-ring">
      <Component ref={ref} {...linkProps} {...nextLinkProps} {...rest} className={theme}>
        {children}
      </Component>
    </FocusRing>
  )
})

const Button = React.forwardRef((props: TButtonProps, forwardRef: TButtonRef) => {
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
  // excludeFromTabOrder and preventFocusOnPress being spread on an element creates unknown attributes error in React 19
  const { onPress, onFocusChange, excludeFromTabOrder, preventFocusOnPress, ...allProps } = rest as Record<
    string,
    unknown
  >

  return (
    <FocusRing within focusRingClass="has-focus-ring">
      <Component ref={ref} {...buttonProps} {...allProps} className={theme}>
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

const ButtonComponent = <T extends TToken>(props: TButtonProps<T>) => {
  const { as } = props
  const ref = useRef(null)
  if (as === 'a') return <Anchor ref={ref} {...props} />
  return <Button ref={ref} {...props} />
}

ButtonComponent.displayName = 'Button'

export default ButtonComponent
