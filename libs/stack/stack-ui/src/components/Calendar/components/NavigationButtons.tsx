import Box from '../../Box'
import Button from '../../Button'
import Icon from '../../Icon'
import type { TCalendarNavigationButtonsProps } from '../interface'

const NavigationButtons = ({
  themeName = 'calendar',
  tokens,
  buttons,
  prevButtonProps,
  nextButtonProps,
  ...rest
}: TCalendarNavigationButtonsProps) => {
  return (
    <Box themeName={`${themeName}.navigationButtonsContainer`} tokens={tokens} {...rest}>
      <Button
        themeName={`${themeName}.navigationButtons`}
        tokens={{ ...tokens, direction: 'prev' }}
        type="button"
        {...prevButtonProps}
        handlePress={prevButtonProps?.onPress}
      >
        <Icon icon={buttons?.buttonPrev?.icon ?? 'ArrowLeft'} />
      </Button>
      <Button
        themeName={`${themeName}.navigationButtons`}
        tokens={{ ...tokens, direction: 'next' }}
        type="button"
        {...nextButtonProps}
        handlePress={nextButtonProps?.onPress}
      >
        <Icon icon={buttons?.buttonNext?.icon ?? 'ArrowRight'} />
      </Button>
    </Box>
  )
}

export default NavigationButtons
