import { createStitches } from '@stitches/react'
import { mauveDark, grayDark } from '@radix-ui/colors'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...mauveDark,
      ...grayDark
    },
    fonts: {
      inconsolata: 'Inconsolata, Droid Sans, Helvetica Neue, sans-serif',
      mono: 'Courier New, Courier, monospace',
    },
    space: {
      1: '1rem',
      2: '2rem',
      3: '2.5rem',
      4: '3.5rem',
      5: '4rem'
    },
    fontSizes: {
      1: '1.1em',
      2: '2em',
      3: '1.5em'
    },
    fontWeights: {
      1: '100',
      4: '400',
      5: '500',
      6: '600',
    },
    lineHeights: {
      1: '2rem',
      2: '2.3rem',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  }
})
