import useThemeContext from 'libs/stack-ui/src/providers/Theme/hooks'
import { useMenuSection, useSeparator } from 'react-aria'
import type { IMenuSectionProps } from '../../interface'
import MenuItem from '../MenuItem'

const MenuSection = (props: IMenuSectionProps) => {
  const { section, state, themeName = 'menu', customTheme, tokens } = props

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  })

  const { separatorProps } = useSeparator({
    elementType: 'li',
  })

  const listTheme = useThemeContext(`${themeName}.menuSectionList`, tokens, customTheme)
  const separatorTheme = useThemeContext(`${themeName}.menuSectionSeparator`, tokens, customTheme)
  const headingTheme = useThemeContext(`${themeName}.menuSectionHeading`, tokens, customTheme)

  return (
    <>
      {section.key !== state.collection.getFirstKey() && <li {...separatorProps} className={separatorTheme} />}
      <li {...itemProps}>
        {section.rendered && (
          <span {...headingProps} className={headingTheme}>
            {section.rendered}
          </span>
        )}
        <ul {...groupProps} className={listTheme}>
          {[...section.childNodes].map((node) => (
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  )
}

export default MenuSection
