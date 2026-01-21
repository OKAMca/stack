import Search from '.'
import { SearchBarProvider } from '../../../providers/UserSearchQuery'

function Template(args) {
  return (
    <SearchBarProvider userQuery="">
      <Search {...args} />
    </SearchBarProvider>
  )
}

export default {
  title: 'Form/Fields/Search',
  component: Search,

  args: {
    'placeholder': 'Search',
    'onChange': value => console.log(`You have typed ${value}`),
    'onSubmit': value => console.log(`You have submitted ${value}`),
    'aria-label': 'Search',
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    id: 'default',
    label: 'Search',
  },
}

export const NoLabel = {
  render: Template.bind({}),
  name: 'No label',

  args: {
    id: 'no-label',
  },
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    id: 'disabled',
    label: 'Search',
    disabled: true,
  },
}

export const Error = {
  render: Template.bind({}),
  name: 'Error',

  args: {
    id: 'error',
    label: 'Search',
    errorMessage: 'This is an error message',
  },
}
