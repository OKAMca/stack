'use client'

import type { Ref, RefObject } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { NextLinkProps } from '../../types/next-link'
import type { TAnchorProps, TButtonProps } from './interface'
import { useRef } from 'react'
import { FocusRing, useButton, useLink } from 'react-aria'
import useThemeContext from '../../providers/Theme/hooks'

export function Anchor({ ref: forwardRef, ...props }: TAnchorProps & { ref?: Ref<HTMLElement> }) {
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
  const { onPress, onFocusChange, excludeFromTabOrder, preventFocusOnPress, ...anchorProps } = rest as Record<
    string,
    unknown
  >

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
      <Component ref={ref} {...linkProps} {...nextLinkProps} {...anchorProps} className={theme}>
        {children}
      </Component>
    </FocusRing>
  )
}

function Button({ ref: forwardRef, ...props }: TButtonProps & { ref?: Ref<HTMLElement> }) {
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
}

export function ButtonWithForwardRef({ ref, ...props }: TAnchorProps & { ref?: Ref<HTMLElement> }) {
  const { as } = props
  if (as === 'a')
    return <Anchor ref={ref} {...props} />
  return <Button ref={ref} {...props} />
}

ButtonWithForwardRef.displayName = 'ButtonWithForwardRef'

export function ButtonComponent<T extends TToken>(props: TButtonProps<T>) {
  const { as } = props
  const ref = useRef(null)
  if (as === 'a')
    return <Anchor ref={ref} {...props} />
  return <Button ref={ref} {...props} />
}

ButtonComponent.displayName = 'Button'

// Named export alias for backwards compatibility with barrel file
export { ButtonComponent as Button }
