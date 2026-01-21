'use client'

import type { ComponentType } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TIconProps } from './interface'
import * as React from 'react'
import { lazy, Suspense } from 'react'
import useThemeContext from '../../providers/Theme/hooks'
import Fallback from '../icons/IconFallback'

// Cache for dynamically imported icon components
const iconCache = new Map<string, ComponentType<TIconProps>>()

function getIconComponent(iconName: string) {
  const cached = iconCache.get(iconName)
  if (cached != null)
    return cached

  const LazyIcon = lazy(async () => import(`../icons/${iconName}.tsx`) as Promise<{ default: ComponentType<TIconProps> }>)
  iconCache.set(iconName, LazyIcon)
  return LazyIcon
}

function Icon(props: TIconProps & { icon: string }) {
  const { icon, ...rest } = props
  // eslint-disable-next-line ts/strict-boolean-expressions -- intentional fallback if empty string
  const iconName = icon || 'ArrowRight'

  // Use useMemo to get/create icon component - synchronous since getIconComponent
  // either returns from cache or creates a lazy component (doesn't actually load it)
  const IconComponent = React.useMemo(() => getIconComponent(iconName), [iconName])

  return (
    <Suspense fallback={<Fallback className="overflow-visible pointer-events-none" />}>
      <IconComponent {...rest} className="overflow-visible pointer-events-none" {...props} />
    </Suspense>
  )
}

function IconDispatcher<T extends TToken>(props: TIconProps<T>) {
  const { icon, as: Component = 'span', tokens, customTheme, themeName = 'icon', children, ...rest } = props
  const theme = useThemeContext(themeName, tokens, customTheme)

  if (typeof icon !== 'string') {
    return (
      <Component {...rest} className={theme}>
        {children}
        {icon}
      </Component>
    )
  }

  return (
    <Component className={theme}>
      {children}
      <Icon icon={icon} {...rest} />
    </Component>
  )
}

export default IconDispatcher
