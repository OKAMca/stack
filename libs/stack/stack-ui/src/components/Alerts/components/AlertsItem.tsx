import React from 'react'
import { useSwiperSlide } from 'swiper/react'
import useThemeContext from '../../../providers/Theme/hooks'
import Box from '../../Box'
import Button from '../../Button'
import Icon from '../../Icon'
import type { TAlertsItemProps } from '../interface'

const AlertsItem = (props: TAlertsItemProps) => {
  const { title, button, content, themeName = 'alerts.item', tokens, icon, id } = props

  const titleTheme = useThemeContext(`${themeName}.title`, tokens)
  const { isActive } = useSwiperSlide()

  if (!title && !button && !content && !icon) return null

  return (
    <>
      {icon && <Icon icon={icon} themeName={`${themeName}.icon`} tokens={tokens} />}
      {(title || button || content) && (
        <Box themeName={`${themeName}.container`} tokens={tokens}>
          {title && (
            <span className={titleTheme} id={id}>
              {title}
            </span>
          )}
          {button && (
            <Button tabIndex={isActive ? 0 : -1} themeName={`${themeName}.button`} tokens={tokens} {...button} />
          )}
          {content &&
            (React.isValidElement(content)
              ? React.cloneElement(content, { ...content.props, themeName: `${themeName}.content`, tokens })
              : content)}
        </Box>
      )}
    </>
  )
}

export default AlertsItem
