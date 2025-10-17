'use client'

import Button from '../Button'
import Icon from '../Icon'
import type { TPrintButtonProps } from './interface'

const PrintButton = (props: TPrintButtonProps) => {
  const { ariaLabel, icon, customTheme, themeName = 'printButton', tokens, ...rest } = props

  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
      window.print()
    }
  }

  return (
    <Button
      themeName={`${themeName}.button`}
      tokens={tokens}
      aria-label={ariaLabel}
      handlePress={handleClick}
      {...rest}
    >
      <Icon themeName={`${themeName}.icon`} icon={icon ?? 'Print'} />
    </Button>
  )
}
export default PrintButton
