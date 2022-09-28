import Header from '@/components/header'

import { globalCss } from '@/styles/stitches.config'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: '$inconsolata',
    lineHeight: '1rem',
  },
  body: {
    backgroundColor: '$slate1',
    color: '$slate10',
    padding: '1rem 1.5rem 1.5rem',
  },
  p: {
    fontSize: '$1',
    lineHeight: '$2',
  },
  '::selection': {
    backgroundColor: '$mauve12',
  },
})

export default function App({ Component, pageProps }) {
  return (
    <>
      {globalStyles()}
      <Header />
      <Component {...pageProps} />
    </>
  )
}
