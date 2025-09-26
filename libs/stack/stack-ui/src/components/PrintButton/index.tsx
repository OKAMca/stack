'use client'

import Button from '../Button'
import Icon from '../Icon'
import type { TPrintButtonProps } from './interface'

const PrintButton = (props: TPrintButtonProps) => {
  const { ariaLabel, icon, customTheme, themeName = 'printButton', tokens, ...rest } = props

  return (
    <Button
      themeName={`${themeName}.button`}
      tokens={tokens}
      aria-label={ariaLabel}
      handlePress={() => window.print()}
      {...rest}
    >
      <Icon themeName={`${themeName}.icon`} icon={icon ?? 'Print'} />
    </Button>
  )
}
export default PrintButton
