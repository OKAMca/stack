import { I18nProvider } from 'react-aria'
import Date from './index'

const Template = (args) => <Date {...args} />

const FrenchTemplate = (args) => (
  <I18nProvider locale="fr-FR">
    <Date {...args} />
  </I18nProvider>
)

export default {
  title: 'BASE COMPONENTS/Date',
  component: Date,
}

export const DifferentLanguage = {
  render: FrenchTemplate.bind({}),
  name: 'Different Language',

  args: {
    date: '2021-12-31T00:01:00-0500',

    dateFormatterOptions: {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    },

    tokens: {
      size: 'paragraph',
    },
  },
}

export const Short = {
  render: Template.bind({}),
  name: 'Short',

  args: {
    date: '2021-12-31T00:01:00-0500',

    dateFormatterOptions: {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    },

    tokens: {
      size: 'paragraph',
    },
  },
}

export const Long = {
  render: Template.bind({}),
  name: 'Long',

  args: {
    date: '2021-12-31T00:01:00-0500',

    dateFormatterOptions: {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    },
  },
}

export const TimeWithH4Style = {
  render: Template.bind({}),
  name: 'Time with h4 style',

  args: {
    date: '2021-12-31T00:01:00-0500',

    dateFormatterOptions: {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    },

    tokens: {
      size: 'h4',
    },
  },
}

export const MonthAndDayOnly = {
  render: Template.bind({}),
  name: 'Month and Day only',

  args: {
    date: '2021-12-31T00:01:00-0500',

    dateFormatterOptions: {
      month: 'long',
      day: 'numeric',
    },
  },
}

export const TwoDigits = {
  render: Template.bind({}),
  name: '2 digits',

  args: {
    date: '2021-12-31T00:01:00-0500',

    dateFormatterOptions: {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    },
  },
}
