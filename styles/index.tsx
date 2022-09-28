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

  '&:hover, &:visited': {
    color: '$mauve8',
  },
  '&:active': {
    color: '$mauve9',
  },
})

export const List = styled('ul', {
  display: 'flex',
  listStyle: 'decimal-leading-zero',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  alignItems: 'end',
  '& > li' : {
    flexBasis: '2em'
  }
}) 

export const p = css({
  variants: {
    variant: {
      title: {
        margin: '$4 0',
        fontWeight: '$6',
        fontSize: '$2',
        lineHeight: '$1'
      },
      content: {
        margin: '$1 0px',
        fontSize: '$1'
      },
    },
  },
})

export const footer = css({
  margin: '$4 auto auto'
})