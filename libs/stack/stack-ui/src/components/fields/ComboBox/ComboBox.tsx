'use client'

/* eslint-disable camelcase */
import { useComboBoxState } from '@react-stately/combobox'
import type { RefObject } from 'react'
import { useRef, useEffect, useState } from 'react'
import { useComboBox, useFilter } from 'react-aria'
import tw, { styled } from 'twin.macro'
import { ButtonWithForwardRef } from '../../Button'
import type { TComboBoxProps, TComboBoxWrapperProps } from './ComboBox.interface'
import { getBgVariant } from './ComboBox.styles'
import ListBox from './components/Listbox'
import Popover from './components/Popover'
import { buttonIcon } from './utilities/Icon'

const StyledComboBox = styled.div(() => [tw`relative inline-flex flex-col text-left`])

// removed attributes
// selectedKey,
// presetPostTypeFilter,
// selectedBrand,
export const ComboBoxWrapper = ({
  variant = 'gray',
  orientation = 'left',
  items,
  placeholder,
  isDisabled,
  onCollectionChange,
  ...props
}: TComboBoxWrapperProps) => {
  // Setup filter function and state.
  const { contains } = useFilter({ sensitivity: 'base' })
  const state = useComboBoxState({
    ...props,
    items,
    defaultFilter: contains,
    onInputChange: props.onInputChange,
    onBlur: props.onBlur,
  })

  const [isTyping, setIsTyping] = useState(false)

  const buttonRef = useRef(null)
  const inputRef = useRef(null) as RefObject<HTMLInputElement>
  const listBoxRef = useRef(null)
  const popoverRef = useRef(null)

  const { label, description, sectionLabel = '' } = props

  const { buttonProps, inputProps, listBoxProps, labelProps, descriptionProps } = useComboBox(
    {
      ...props,
      inputRef,
      popoverRef,
      listBoxRef,
      buttonRef,
      items,
      onFocusChange: (isFocused: boolean) => {
        if (!isFocused) {
          setIsTyping(false)
        }
      },
    },
    state,
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onPressStart, ...newButtonProps } = buttonProps
  const { onChange, ...newInputProps } = inputProps

  useEffect(() => {
    if (isTyping && inputRef.current === document.activeElement) {
      onCollectionChange?.(state)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTyping, items])

  return (
    <div>
      {label && (
        <span tw="sr-only" {...labelProps}>
          {label}
        </span>
      )}
      {description && (
        <div tw="sr-only" {...descriptionProps}>
          {description}
        </div>
      )}
      <div
        tw="flex flex-row rounded-full border border-gray-1 transition duration-300 ease-in-out"
        css={[
          getBgVariant(variant),
          variant === 'gray' &&
            tw`focus-within:border-white hover:bg-gray-1 hover:border-white hover:text-white justify-between`,
          isDisabled && tw`opacity-50 pointer-events-none`,
        ]}
      >
        <input
          {...newInputProps}
          onChange={(e) => {
            setIsTyping(true)
            onChange?.(e)
          }}
          ref={inputRef}
          placeholder={placeholder}
          tw="text-white bg-transparent outline-none pl-5 text-paragraph lg:pl-7 sm:w-[280px] w-full"
        />
        <ButtonWithForwardRef
          {...newButtonProps}
          ref={buttonRef}
          type="button"
          icon={buttonIcon(state.inputValue)}
          handlePress={
            state.inputValue === ''
              ? onPressStart
              : () => {
                  state.setInputValue('')
                  setIsTyping(false)
                  state.setOpen(false)
                }
          }
          tw="text-gray-2 border-2 border-gray-1 !px-0 lg:!min-h-[3.25rem] lg:!min-w-[3.25rem]"
          css={[
            getBgVariant(variant),
            variant === 'gray' && tw`hover:bg-gray-1 hover:text-white`,
            state.inputValue !== '' && tw`[& svg]:w-[40px] [& svg]:h-[40px]`,
            state.inputValue !== '' && tw`p-0`,
            state.inputValue === '' && tw`opacity-[0%] md:opacity-[100%]`,
            isDisabled && tw`md:opacity-50 pointer-events-none`,
          ]}
        />
      </div>
      {state.isOpen && (
        <Popover
          state={state}
          popoverRef={popoverRef}
          triggerRef={inputRef}
          isOpen={state.isOpen}
          onClose={() => state.setOpen(false)}
          variant={variant}
          orientation={orientation}
        >
          <ListBox
            listLabel={state.inputValue === '' ? sectionLabel : ''}
            {...listBoxProps}
            listBoxRef={listBoxRef}
            state={state}
          />
        </Popover>
      )}
    </div>
  )
}

export const ComboBox = (props: TComboBoxProps) => {
  const { children, ...rest } = props

  return (
    <StyledComboBox>
      <ComboBoxWrapper {...rest} allowsCustomValue>
        {children}
      </ComboBoxWrapper>
    </StyledComboBox>
  )
}

export default ComboBox
