import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Link, p } from '@/styles'
import me from '@/data/me'

export default function Home(_props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={p({ variant: 'title' })}>
          {me.name}. {me.role} and writer.
        </p>
        <p className={p({ variant: 'content' })}>
          Hi, I&apos;m 27 years old, Systems Engineer (focused Mobile/Frontend
          Development), which I program all day and at night I dedicate time to
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
          o{' '}
          <Link
            href="http://twitter.com/cloubyy"
            target="_blank"
            rel="noreferrer"
          >
            /twitter
          </Link>
        </p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} id="blog">
        <h2 className={utilStyles.headingTitle} id="blog-title">_Blog_</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, time }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className={`${utilStyles.headingLg} ${utilStyles.bold}`}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
                <span> · {time.text}</span>
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} id="tech-talks">
        <h2 className={utilStyles.headingTitle}>_Talks_</h2>
        <div>
          <ul className={utilStyles.list}>
            {allTalksData.map((talk, index) => (
              <li key={`talk_${index}`}>
                <Card {...talk} />
              </li>
            ))}
          </ul>
        </div>
      </section> */}
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
