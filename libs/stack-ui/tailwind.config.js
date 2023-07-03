const tailwindColors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { join } = require('path')
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')

/**
 * Return tailwind v3 non-deprecated colors
 * PS: code is dirty cause tailwind colors have getters on them
 *     that will log a warning when accessing the object key
 * @type {Record<string, string | Record<string, string>>}
 */
const tailwindV3Colors = Object.entries(Object.getOwnPropertyDescriptors(tailwindColors))
  .filter(([, desc]) => Object.prototype.hasOwnProperty.call(desc, 'value') && typeof desc.value !== 'function')
  .reduce((acc, [key]) => {
    if (!['coolGray', 'lightBlue', 'warmGray', 'trueGray', 'blueGray'].includes(key)) {
      acc[key] = tailwindColors[key]
    }
    return acc
  }, {})

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    colors: {
      ...tailwindV3Colors,
      ...colors,
      'color-1': {
        100: '#EAEEEF',
        200: '#CAD4D8',
        300: '#A9B9C0',
        400: '#5D7F8C',
        500: '#295261',
        600: '#254957',
        700: '#1F3D49',
        800: '#19313A',
        900: '#142830',
      },
      'color-2': {
        100: '#FEFEFD',
        200: '#FCFCF9',
        300: '#F9F9F5',
        400: '#F5F5EE',
        500: '#F1F1E6',
        600: '#D9D9CF',
        700: '#B5B5AD',
        800: '#91918A',
        900: '#767671',
      },
      gray: {
        100: '#F1F1F2',
        200: '#DBDDDF',
        300: '#C5C8CB',
        400: '#9A9FA5',
        500: '#GE767E',
        600: '#636A71',
        700: '#53595F',
        800: '#42474C',
        900: '#363A3E',
      },
      white: '#FEFFFF',
      black: '#0A1418',
      success: '#3A8230',
      error: '#E0311A',
    },
    minWidth: {
      6: '1.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      15: '3.75rem',
      16: '4rem',
      17: '4.25rem',
      18: '4.5rem',
      24: '6rem',
      32: '8rem',
      36: '9rem',
    },
    minHeight: () => ({
      6: '1.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      15: '3.75rem',
      16: '4rem',
      17: '4.25rem',
      18: '4.5rem',
      24: '6rem',
      32: '8rem',
      36: '9rem',
    }),
    fontFamily: {
      serif: 'Inter, ui-sans-serif, sans-serif',
      body: 'Inter, ui-sans-serif, sans-serif',
      sans: 'Inter, ui-sans-serif, sans-serif',
      mono: 'Inter, ui-sans-serif, sans-serif',
    },
    fontSize: {
      '5xl': [
        'clamp(48px, calc(3rem + ((1vw - 6.4px) * 7.5)), 96px)',
        { lineHeight: 'clamp(130%, calc(3rem + ((1vw - 6.4px) * 7.5)), 110%)', fontWeight: '700' },
      ],
      '4xl': [
        'clamp(32px, calc(2rem + ((1vw - 6.4px) * 7.5)), 80px)',
        { lineHeight: 'clamp(130%, calc(2rem + ((1vw - 6.4px) * 7.5)), 125%)', fontWeight: '700' },
      ],
      '3xl': [
        'clamp(24px, calc(1.5rem + ((1vw - 6.4px) * 5)), 56px)',
        { lineHeight: 'clamp(130%, calc(1.5rem + ((1vw - 6.4px) * 5)), 125%)', fontWeight: '700' },
      ],
      '2xl': ['clamp(20px, calc(1.25rem + ((1vw - 6.4px) * 3.125)), 40px)', { lineHeight: '130%', fontWeight: '700' }],
      xl: [
        'clamp(16px, calc(1rem + ((1vw - 6.4px) * 2.5)), 32px)',
        { lineHeight: 'clamp(135%, calc(1rem + ((1vw - 6.4px) * 2.5)), 130%)', fontWeight: '700' },
      ],
      lg: [
        'clamp(14px, calc(0.875rem + ((1vw - 6.4px) * 0.9375)), 20px)',
        { lineHeight: 'clamp(135%, calc(0.875rem + ((1vw - 6.4px) * 0.9375)), 130%)', fontWeight: '700' },
      ],
      md: [
        'clamp(16px, calc(1rem + ((1vw - 6.4px) * 0.3125)), 18px)',
        { lineHeight: 'clamp(135%, calc(1rem + ((1vw - 6.4px) * 0.3125)), 130%)', fontWeight: '400' },
      ],
      sm: ['clamp(12px, calc(0.75rem + ((1vw - 6.4px) * 0.3125)), 14px)', { lineHeight: '150%', fontWeight: '400' }],
      xs: ['clamp(10px, calc(0.625rem + ((1vw - 6.4px) * 0.3125)), 12px)', { lineHeight: '130%', fontWeight: '400' }],
    },
    extend: {
      spacing: {
        'mobile-xxs': '.5rem',
        'mobile-xs': '1rem',
        'mobile-sm': '1.5rem',
        'mobile-md': '2rem',
        'mobile-lg': '3rem',
        'mobile-xl': '4rem',
        'desktop-xxs': '1rem',
        'desktop-xs': '1.5rem',
        'desktop-sm': '2rem',
        'desktop-md': '3rem',
        'desktop-lg': '3.75rem',
        'desktop-xl': '7.5rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: [({ after }) => after(['disabled']), ({ after }) => after(['aria-disabled'])],
      pointerEvents: [({ after }) => after(['disabled']), ({ after }) => after(['aria-disabled'])],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-logical'),
    plugin(function ({ addVariant }) {
      addVariant('aria-disabled', `&[aria-disabled='true']`)
    }),
  ],
}
