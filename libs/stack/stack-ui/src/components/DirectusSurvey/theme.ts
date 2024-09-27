import type { ITheme } from 'survey-core'

/* eslint-disable @typescript-eslint/naming-convention */
const surveyJSON: ITheme = {
  themeName: 'default',
  colorPalette: 'light',
  isPanelless: true,
  backgroundImage: '',
  backgroundOpacity: 1,
  backgroundImageAttachment: 'scroll',
  backgroundImageFit: 'cover',
  cssVariables: {
    '--sjs-corner-radius': '4px',
    '--sjs-base-unit': '8px',
    '--sjs-shadow-small': '0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
    '--sjs-shadow-inner': 'inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
    '--sjs-border-default': 'rgba(0, 0, 0, 0.16)',
    '--sjs-border-light': 'rgba(0, 0, 0, 0.09)',
    '--sjs-general-backcolor': '#ffffff', // Tailwind: colors.white
    '--sjs-general-backcolor-dark': '#f8f8f8', // Tailwind: colors.accent[3]
    '--sjs-general-backcolor-dim-light': '#f9f9f9', // Tailwind: colors.accent[3]
    '--sjs-general-backcolor-dim-dark': '#f3f3f3', // Tailwind: colors.accent[3]
    '--sjs-general-forecolor': '#000000E8', // Tailwind: colors.black
    '--sjs-general-forecolor-light': '#00000073', // Tailwind: colors.border
    '--sjs-general-dim-forecolor': '#000000E8', // Tailwind: colors.black
    '--sjs-general-dim-forecolor-light': '#00000073', // Tailwind: colors.border
    '--sjs-secondary-backcolor': '#FF9814', // Tailwind: colors.secondary
    '--sjs-secondary-backcolor-light': '#FF981419', // Tailwind: colors.accent[4]
    '--sjs-secondary-backcolor-semi-light': 'rgba(255, 152, 20, 0.25)',
    '--sjs-secondary-forecolor': '#ffffff', // Tailwind: colors.white
    '--sjs-secondary-forecolor-light': 'rgba(255, 255, 255, 0.25)',
    '--sjs-shadow-small-reset': '0px 0px 0px 0px rgba(0, 0, 0, 0.15)',
    '--sjs-shadow-medium': '0px 2px 6px 0px rgba(0, 0, 0, 0.1)',
    '--sjs-shadow-large': '0px 8px 16px 0px rgba(0, 0, 0, 0.1)',
    '--sjs-shadow-inner-reset': 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)',
    '--sjs-border-inside': 'rgba(0, 0, 0, 0.16)',
    '--sjs-special-red-forecolor': '#ffffff', // Tailwind: colors.white
    '--sjs-special-green': '#19B394', // Tailwind: colors.quaternary
    '--sjs-special-green-light': '#19B39419', // Tailwind: colors.accent[4]
    '--sjs-special-green-forecolor': '#ffffff', // Tailwind: colors.white
    '--sjs-special-blue': '#437FD9', // Tailwind: colors.secondary
    '--sjs-special-blue-light': '#437FD919', // Tailwind: colors.accent[4]
    '--sjs-special-blue-forecolor': '#ffffff', // Tailwind: colors.white
    '--sjs-special-yellow': '#FF9814', // Tailwind: colors.secondary
    '--sjs-special-yellow-light': '#FF981419', // Tailwind: colors.accent[4]
    '--sjs-special-yellow-forecolor': '#ffffff', // Tailwind: colors.white
    '--sjs-article-font-xx-large-textDecoration': 'none',
    '--sjs-article-font-xx-large-fontWeight': '700',
    '--sjs-article-font-xx-large-fontStyle': 'normal',
    '--sjs-article-font-xx-large-fontStretch': 'normal',
    '--sjs-article-font-xx-large-letterSpacing': '0',
    '--sjs-article-font-xx-large-lineHeight': '64px',
    '--sjs-article-font-xx-large-paragraphIndent': '0px',
    '--sjs-article-font-xx-large-textCase': 'none',
    '--sjs-article-font-x-large-textDecoration': 'none',
    '--sjs-article-font-x-large-fontWeight': '700',
    '--sjs-article-font-x-large-fontStyle': 'normal',
    '--sjs-article-font-x-large-fontStretch': 'normal',
    '--sjs-article-font-x-large-letterSpacing': '0',
    '--sjs-article-font-x-large-lineHeight': '56px',
    '--sjs-article-font-x-large-paragraphIndent': '0px',
    '--sjs-article-font-x-large-textCase': 'none',
    '--sjs-article-font-large-textDecoration': 'none',
    '--sjs-article-font-large-fontWeight': '700',
    '--sjs-article-font-large-fontStyle': 'normal',
    '--sjs-article-font-large-fontStretch': 'normal',
    '--sjs-article-font-large-letterSpacing': '0',
    '--sjs-article-font-large-lineHeight': '40px',
    '--sjs-article-font-large-paragraphIndent': '0px',
    '--sjs-article-font-large-textCase': 'none',
    '--sjs-article-font-medium-textDecoration': 'none',
    '--sjs-article-font-medium-fontWeight': '700',
    '--sjs-article-font-medium-fontStyle': 'normal',
    '--sjs-article-font-medium-fontStretch': 'normal',
    '--sjs-article-font-medium-letterSpacing': '0',
    '--sjs-article-font-medium-lineHeight': '32px',
    '--sjs-article-font-medium-paragraphIndent': '0px',
    '--sjs-article-font-medium-textCase': 'none',
    '--sjs-article-font-default-textDecoration': 'none',
    '--sjs-article-font-default-fontWeight': '400',
    '--sjs-article-font-default-fontStyle': 'normal',
    '--sjs-article-font-default-fontStretch': 'normal',
    '--sjs-article-font-default-letterSpacing': '0',
    '--sjs-article-font-default-lineHeight': '28px',
    '--sjs-article-font-default-paragraphIndent': '0px',
    '--sjs-article-font-default-textCase': 'none',
    '--sjs-general-backcolor-dim': '#f3f3f3', // Tailwind: colors.accent[3]
    '--sjs-primary-backcolor': '#0060AC', // Tailwind: colors.primary
    '--sjs-primary-backcolor-dark': '#22365C', // Tailwind: colors.tertiary
    '--sjs-primary-backcolor-light': '#ffffff', // Tailwind: colors.accent[4]
    '--sjs-primary-forecolor': '#ffffff', // Tailwind: colors.white
    '--sjs-primary-forecolor-light': 'rgba(255, 255, 255, 0.25)',
    '--sjs-special-red': '#E50A3E', // Tailwind: colors.error
    '--sjs-special-red-light': '#E50A3E19', // Tailwind: colors.error-bg
  },
  headerView: 'basic',
}

export default surveyJSON
