'use client'

/**
 * AlertsItem - Alert banner item component
 *
 * Uses cloneElement to inject theme tokens into the content component,
 * following the react-aria component composition pattern for prop injection.
 *
 * @see https://react-spectrum.adobe.com/architecture.html (component composition patterns)
 * @see docs/ADR/005_react-stately-eslint-exceptions.md
 */

import type { TAlertsItemProps } from '../interface'
import * as React from 'react'
import { useCarousel } from '../../../providers/Carousel'
import { Box } from '../../Box'
import { Button } from '../../Button'
import Icon from '../../Icon'

function AlertsItem(props: TAlertsItemProps) {
  const { title, button, content, themeName = 'alerts.item', tokens, icon, id, swiperSlideIndex = 0 } = props
  const { activeIndex } = useCarousel()
  const isActive = activeIndex === swiperSlideIndex

  if (title == null && button == null && content == null && icon == null)
    return null
  return (
    <>
      {icon != null && <Icon icon={icon} themeName={`${themeName}.icon`} tokens={tokens} />}
      {(title != null || button != null || content != null) && (
        <Box themeName={`${themeName}.container`} tokens={tokens}>
          {title != null && (
            <Box as="span" themeName={`${themeName}.title`} tokens={tokens} {...{ id }}>
              {title}
            </Box>
          )}
          {button != null && (
            <Button tabIndex={isActive ? 0 : -1} themeName={`${themeName}.button`} tokens={tokens} {...button} />
          )}
          {content != null
            && (React.isValidElement(content)
              ? React.cloneElement(content as React.ReactElement<Record<string, unknown>>, {
                  themeName: `${themeName}.content`,
                  tokens,
                })
              : content)}
        </Box>
      )}
    </>
  )
}

export default AlertsItem
