import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Link, p } from '@/styles'
import me from '@/data/me'
import Image from 'next/image'
import Footer from '@/components/footer'

export default function Home(_props) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Image
          src={me.avatar.src}
          width={me.avatar.width}
          height={me.avatar.height}
          alt="Picture about me"
          priority={me.avatar.priority}
        />
        <h1 className={p({ variant: 'title' })}>
          {me.name}. {me.role} and writer.
        </h1>
        <p className={p({ variant: 'content' })}>
          Hi, I&apos;m Software Engineer (focused Mobile/Front-end
          Development), which I program all day and at night I try to focus time about
          being more friendly with <strong>UX</strong> and{' '}
          <strong>generative coding</strong>.
        </p>
        <p className={p({ variant: 'content' })}>
          Some days write some <Link href="#">posts</Link>,the one or another{' '}
          <Link href="#">poetry</Link> in the way, you can contact me{' '}
          <Link
            href="https://github.com/clouby"
            target="_blank"
            rel="noreferrer"
          >
            /github
          </Link>{' '}
          or {' '}
          <Link
            href="http://twitter.com/cloubyy"
            target="_blank"
            rel="noreferrer"
          >
            /twitter
          </Link>
        </p>
      </section>
    </Layout>
  )
}

export function getStaticProps() {
  const allPostsData = []
  const allTalksData = []

  return {
    props: {
      allPostsData,
      allTalksData,
    },
  }
}
