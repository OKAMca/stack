'use client'

import React, { Suspense, lazy, useMemo } from 'react'
import useThemeContext from '../../providers/Theme/hooks'
import type { TToken } from '../../providers/Theme/interface'
import Fallback from '../icons/IconFallback'
import type { TIconProps } from './interface'

const Icon = (props: TIconProps) => {
  const { icon, ...rest } = props
  const ImportedIcon = useMemo(() => lazy(() => import(`../icons/${icon || 'ArrowRight'}.tsx`)), [icon])

  return (
    <Suspense fallback={<Fallback className="overflow-visible pointer-events-none" />}>
      <ImportedIcon {...rest} className="overflow-visible pointer-events-none" {...props} />
    </Suspense>
  )
}

const IconDispatcher = <T extends TToken>(props: TIconProps<T>) => {
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
