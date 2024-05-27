import React from 'react'
import useThemeContext from '../../../providers/Theme/hooks'
import Box from '../../Box'
import Button from '../../Button'
import Icon from '../../Icon'
import type { TAlertsItemProps } from '../interface'

const AlertsItem = (props: TAlertsItemProps) => {
  const { title, button, content, themeName = 'alerts.item', tokens, icon, id } = props

  const titleTheme = useThemeContext(`${themeName}.title`, tokens)

  if (!title && !button && !content && !icon) return null

  return (
    <>
      {icon && <Icon icon={icon} themeName={`${themeName}.icon`} tokens={tokens} />}
      {(title || button || content) && (
        <Box themeName={`${themeName}.container`}>
          {title && (
            <span className={titleTheme} id={id}>
              {title}
            </span>
          )}
          {button && <Button themeName={`${themeName}.button`} tokens={tokens} {...button} />}
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
