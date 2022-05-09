import { createStitches } from '@stitches/react'
import { mauveDark, slateDark } from '@radix-ui/colors'

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
      ...slateDark,
    },
    fonts: {
      inconsolata: 'Inconsolata, Droid Sans, Helvetica Neue, sans-serif',
      mono: 'Courier New, Courier, monospace',
    },
    space: {
      1: '1rem',
      2: '2rem',
      3: '2.5rem',
    },
    fontSizes: {
      1: '17px',
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
})
