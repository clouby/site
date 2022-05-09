import Link from 'next/link'
import Head from 'next/head'

import { styled } from '@/styles/stitches.config'
import me from '@/data/me'

import Footer from './footer'

export const siteTitle = `${me.name} - Developer`

const Container = styled('div', {
  maxWidth: '46rem',
  padding: '0 1rem',
  margin: '25rem auto',
})

export default function Layout({
  children,
  home,
}: {
  children: any
  home?: boolean
}) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Welcome to my personal website - write posts &amp; personal experiences"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      <Footer>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a
              href="https://github.com/clouby"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="http://twitter.com/cloubyy"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}
