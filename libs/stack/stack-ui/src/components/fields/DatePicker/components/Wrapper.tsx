import { forwardRef } from 'react'
import Box, { BoxWithForwardRef } from '../../../Box'
import Button from '../../../Button'
import Icon from '../../../Icon'
import Typography from '../../../Typography'
import type { TWrapperProps } from '../interface'

const Wrapper = forwardRef<HTMLDivElement, TWrapperProps>((props, ref) => {
  const {
    themeName = 'datePicker',
    tokens,
    groupProps,
    buttonProps,
    buttonLabel,
    buttonContent,
    icon,
    children,
  } = props
  return (
    <BoxWithForwardRef themeName={`${themeName}.wrapper`} tokens={tokens} {...groupProps} ref={ref}>
      {buttonLabel && (
        <Typography themeName={`${themeName}.buttonLabel`} tokens={tokens}>
          {buttonLabel}
        </Typography>
      )}
      <Box themeName={`${themeName}.dateFieldContainer`} tokens={tokens}>
        {children}
      </Box>
      <Button
        themeName={`${themeName}.button`}
        tokens={tokens}
        type="button"
        {...buttonProps}
        handlePress={buttonProps.onPress}
      >
        {buttonContent && (
          <Typography themeName={`${themeName}.buttonContent`} tokens={tokens}>
            {buttonContent}
          </Typography>
        )}
        <Icon themeName={`${themeName}.icon`} tokens={tokens} icon={icon ?? 'ArrowDown'} />
      </Button>
    </BoxWithForwardRef>
  )
})

Wrapper.displayName = 'Wrapper'

export default Wrapper
