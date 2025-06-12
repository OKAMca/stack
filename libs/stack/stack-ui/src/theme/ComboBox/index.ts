import type { TTheme } from '../../providers/Theme/interface'
import button from '../Button'
import listBoxTheme from '../ListBox'
import typography from '../Typography'

const comboBoxTheme: TTheme = {
  wrapper: () => 'flex flex-col gap-4 relative',
  label: (props) => typography({ ...props, className: 'text-gray-3' }),
  container: () => 'flex flex-col gap-4',
  inputWrapper: () =>
    'relative flex items-center outline outline-2 outline-gray-300 focus-within:outline focus-within:outline-black focus-within:outline-2 [&>input]:flex-1 [&>input]:min-w-0 [&>input]:pr-10 [&>input]:border-0 [&>input]:outline-0 [&>input]:bg-transparent [&>input]:text-ellipsis [&>input]:whitespace-nowrap [&>input]:overflow-hidden',
  button: (props) => button(props),
  popover: {
    popover: () =>
      'w-[var(--comboBox-popover-container-width)] max-h-[300px] overflow-y-auto overflow-x-hidden text-white !bg-color-1-500 rounded-md p-2',
  },
  listContainer: (props) =>
    typography({
      ...props,
      className:
        'outline outline-2 outline-white outline-offset-2 p-2 my-4 rounded-md w-full flex flex-col gap-6 max-h-[300px] overflow-y-auto overflow-x-hidden',
    }),
  ul: (props) =>
    typography({
      ...props,
      className: 'w-full flex flex-col gap-6',
    }),
  li: () => 'transition w-full hover:text-gray-300 focus-ring-white',
  group: () => 'flex flex-col gap-4',
  section: () => 'flex flex-col gap-4',
  list: {
    ...listBoxTheme,
  },
  headerText: () => 'text-gray-300',
  noResults: () => 'p-4 text-center',
  noResultsText: (props) => typography({ ...props, className: 'text-gray-400' }),
  errorMessage: (props) => typography({ ...props, size: 'footnotes', isError: true }),
}

export default comboBoxTheme
