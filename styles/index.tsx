import { styled, css } from '@/styles/stitches.config'

export const Button = styled('button', {
  backgroundColor: '$mauve2',
  color: '$mauve9',
  borderRadius: '9999px',
  fontSize: '$1',
  padding: '10px 15px',
  cursor: 'pointer',
  border: '0',
  '&:hover': {
    backgroundColor: '$mauve3',
    color: '$mauve10',
  },
})

export const Link = styled('a', {
  color: '$mauve7',
  textUnderlinePosition: 'under',

  '&:hover': {
    color: '$mauve8',
  },
  '&:active': {
    color: '$mauve9',
  },
})

export const p = css({
  variants: {
    variant: {
      title: {
        margin: '$2 0px',
        fontWeight: '$6',
      },
      content: {
        margin: '$1 0px',
      },
    },
  },
})
