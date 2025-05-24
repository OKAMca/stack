'use client'

/* eslint-disable camelcase */
import { useComboBoxState } from '@react-stately/combobox'
import type { RefObject } from 'react'
import { useRef, useEffect, useState } from 'react'
import { useComboBox, useFilter } from 'react-aria'
import { ButtonWithForwardRef } from '../../Button'
import Icon from '../../Icon'
import type { TComboBoxProps, TComboBoxWrapperProps } from './ComboBox.interface'
import ListBox from './components/Listbox'
import Popover from './components/Popover'
import { buttonIcon } from './utilities/Icon'

// Utility function to combine class names conditionally
const cn = (...classes: (string | false | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ')
}

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
        <span className="sr-only" {...labelProps}>
          {label}
        </span>
      )}
      {description && (
        <div className="sr-only" {...descriptionProps}>
          {description}
        </div>
      )}
      <div
        className={cn(
          'flex flex-row rounded-full border border-gray-1 transition duration-300 ease-in-out',
          variant === 'primary' && 'bg-brand-color-1-3',
          variant === 'gray' &&
            'bg-gray-1 focus-within:border-white hover:bg-gray-1 hover:border-white hover:text-white justify-between',
          isDisabled && 'opacity-50 pointer-events-none',
        )}
      >
        <input
          {...newInputProps}
          onChange={(e) => {
            setIsTyping(true)
            onChange?.(e)
          }}
          ref={inputRef}
          placeholder={placeholder}
          className="text-white bg-transparent outline-none pl-5 text-paragraph lg:pl-7 sm:w-[280px] w-full"
        />
        <div
          className={cn(
            'text-gray-2 border-2 border-gray-1 px-0 lg:min-h-[3.25rem] lg:min-w-[3.25rem] flex items-center justify-center rounded-full',
            variant === 'primary' && 'bg-brand-color-1-3',
            variant === 'gray' && 'bg-gray-1 hover:bg-gray-1 hover:text-white',
            state.inputValue !== '' && '[&_svg]:w-[40px] [&_svg]:h-[40px] p-0',
            state.inputValue === '' && 'opacity-0 md:opacity-100',
            isDisabled && 'md:opacity-50 pointer-events-none',
          )}
        >
          <ButtonWithForwardRef
            {...newButtonProps}
            ref={buttonRef}
            handlePress={
              state.inputValue === ''
                ? onPressStart
                : () => {
                    state.setInputValue('')
                    setIsTyping(false)
                    state.setOpen(false)
                  }
            }
            customTheme="w-full h-full flex items-center justify-center bg-transparent border-0 p-0"
          >
            <Icon icon={buttonIcon(state.inputValue)} />
          </ButtonWithForwardRef>
        </div>
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
    <div className="relative inline-flex flex-col text-left">
      <ComboBoxWrapper {...rest} allowsCustomValue>
        {children}
      </ComboBoxWrapper>
    </div>
  )
}

export default ComboBox
