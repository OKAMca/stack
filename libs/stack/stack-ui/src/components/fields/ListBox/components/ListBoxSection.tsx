'use client'

import { filterDOMProps } from '@react-aria/utils'
import { mergeProps, useListBoxSection } from 'react-aria'
import { mergeDefaultComponentProps } from '../../../../helpers/mergeDefaultComponentProps'
import type { TToken } from '../../../../providers/Theme/interface'
import Box from '../../../Box'
import Typography from '../../../Typography'
import Option from '../../Option'
import type { TListBoxSectionProps } from '../interface'

const ListBoxSection = <I extends object = object, T extends TToken = TToken>({
  section,
  state,
  ...props
}: TListBoxSectionProps<I, T>) => {
  const { key, rendered, props: sectionProps, level, hasChildNodes, type } = section
  const {
    themeName = 'listBox.section',
    tokens,
    as = 'li',
    customTheme,
    ...rest
  } = mergeDefaultComponentProps(props, sectionProps)

  const sectionTokens = {
    ...tokens,
    type,
    level: level.toString(),
    hasChildNodes,
  }

  const { itemProps, headingProps, groupProps } = useListBoxSection(props)
  return (
    <Box
      as={as}
      themeName={`${themeName}.wrapper`}
      tokens={sectionTokens}
      {...mergeProps(filterDOMProps(rest), itemProps)}
      customTheme={customTheme}
    >
      {rendered && (
        <Typography themeName={`${themeName}.heading`} tokens={tokens} {...headingProps}>
          {rendered}
        </Typography>
      )}
      <Box as="ul" themeName={`${themeName}.group`} tokens={sectionTokens} {...groupProps}>
        {[...(state.collection.getChildren?.(key) ?? [])].map((item) => (
          <Option key={item.key} item={item} state={state} tokens={tokens} themeName={`${themeName}.item`} />
        ))}
      </Box>
    </Box>
  )
}

export default ListBoxSection
