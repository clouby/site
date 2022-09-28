import { styled, css } from '@/styles/stitches.config'
import NextLink from 'next/link'

export const Button = styled('button', {
  backgroundColor: '$grayA2',
  color: '$grayA9',
  borderRadius: '9999px',
  fontSize: '$1',
  padding: '10px 15px',
  cursor: 'pointer',
  border: '0',
  '&:hover': {
    backgroundColor: '$grayA3',
    color: '$grayA10',
  },
})

export const Link = styled('a', {
  color: '$gray7',
  textUnderlinePosition: 'under',
  '&:visited, &:link': {
    color: '$gray12',
  },
  '&:active, &:hover': {
    color: '$gray11',
  },
})

export const List = styled('ul', {
  display: 'flex',
  listStyle: 'decimal-leading-zero',
  justifyContent: 'flex-end',
  alignItems: 'end',
  flexDirection: 'column',
  '& > li' : {
    flexBasis: '2em'
  },
  '@md': {
    flexDirection: 'row',
    '& > li' : {
      marginLeft: '$4'
    },
  }
}) 

export const p = css({
  variants: {
    variant: {
      title: {
        margin: '$3 0 $2',
        fontWeight: '$6',
        fontSize: '$2',
        lineHeight: '$1',
        color: '$gray12'
      },
      subtitle: {
        margin: '$2 0',
        fontWeight: '$5',
        fontSize: '$3',
        color: '$gray11'
      },
      content: {
        margin: '$1 0',
        fontSize: '$1'
      },
    },
  },
})

export const footer = css({
  margin: '$5 auto auto'
})