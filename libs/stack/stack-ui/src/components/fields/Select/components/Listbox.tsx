'use client'

import type { HTMLAttributes, ReactNode, RefObject } from 'react'
import type { Item, TListBoxProps, TOptionProps } from './Listbox.interface'
import { useRef } from 'react'
import { FocusScope, useListBox, useOption } from 'react-aria'
import useThemeContext from '../../../../providers/Theme/hooks'
import { Box, BoxWithForwardRef } from '../../../Box'
import { Typography, TypographyWithForwardRef } from '../../../Typography'
import { getListboxSections } from './getListboxSections'

function Option<T extends object>({ item, state, themeName = 'li' }: TOptionProps<T>) {
  const ref = useRef(null)
  const { optionProps, isFocusVisible } = useOption({ key: item.key }, state, ref)

  const theme = useThemeContext(themeName)
  return (
    <TypographyWithForwardRef
      as="li"
      {...optionProps}
      tokens={{ className: `${theme} ${isFocusVisible ? 'has-focus-ring' : ''}` }}
      ref={ref}
    >
      {item.rendered}
    </TypographyWithForwardRef>
  )
}

interface InnerListBoxProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
  listBoxRef: RefObject<HTMLUListElement | null>
  themeName: string | null
}

function InnerListBox(props: InnerListBoxProps) {
  const { children, listBoxRef, themeName, ...domSafeProps } = props
  return (
    <FocusScope autoFocus restoreFocus contain>
      <BoxWithForwardRef {...domSafeProps} ref={listBoxRef} as="ul" themeName={`${themeName}.ul`}>
        {children}
      </BoxWithForwardRef>
    </FocusScope>
  )
}

function ListBox<T extends object>(props: TListBoxProps<T>) {
  const ref = useRef<HTMLUListElement>(null)
  const { listBoxRef = ref, state, themeName = 'option', optionsWithHeaders } = props
  const { listBoxProps } = useListBox(props, state, listBoxRef)
  const collection = Array.from(state.collection) as Item<T>[]

  const sections = getListboxSections(collection, optionsWithHeaders ?? [])
  const hasHeaders = optionsWithHeaders?.some(option => option.key?.includes('header-'))

  if (!hasHeaders) {
    return (
      <InnerListBox {...listBoxProps} listBoxRef={listBoxRef} themeName={themeName}>
        {collection.map(item => (
          <Option themeName={`${themeName}.li`} key={item.key} item={item} state={state} />
        ))}
      </InnerListBox>
    )
  }

  return (
    <InnerListBox {...listBoxProps} listBoxRef={listBoxRef} themeName={themeName}>
      {sections.map((section) => {
        const sectionKey = section.header != null
          ? `section-${section.header.key}`
          : `section-${section.items[0]?.key ?? 'empty'}`

        return (
          <Box key={sectionKey} as="li" themeName={`${themeName}.group`}>
            <Box as="section" themeName={`${themeName}.section`}>
              {section.header != null && (
                <Typography as="header" themeName={`${themeName}.headerText`} key={section.header.key}>
                  {section.header.rendered}
                </Typography>
              )}
              <Box as="ul" themeName={`${themeName}.list`}>
                {section.items.map(item => (
                  <Option themeName={`${themeName}.li`} key={String(item.key)} item={item} state={state} />
                ))}
              </Box>
            </Box>
          </Box>
        )
      })}
    </InnerListBox>
  )
}

export { ListBox, Option }
