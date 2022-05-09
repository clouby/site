import { useMemo } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { getMDXComponent } from 'mdx-bundler/client'

import Layout from '@/components/layout'
import Date from '@/components/date'
import { getAllPostIds, getPostData } from '@/lib/posts'
import { getPostDataMDX } from '@/lib/mdx'

import utilStyles from '../../styles/utils.module.css'
import cardStyles from '../../components/card.module.css'
import me from '@/data/me'

export default function Post({ postData, code }) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            postData.title,
          )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={postData.title} />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          <span> · {postData.time.text}</span>
        </div>
        <div
          className={`${cardStyles.avatarTitle} ${utilStyles.lightText}`}
          style={{ margin: '1rem 0rem' }}
        >
          <Image
            width="30"
            height="30"
            src="/images/profile.jpeg"
            alt="Avatar"
          />
          <span>{me.name}</span>
        </div>
        <div className={`${utilStyles.fontPost} ${utilStyles.spaceList}`}>
          <Component />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const { frontmatter, code, id } = await getPostDataMDX(params.id)

  return {
    props: {
      postData,
      frontmatter,
      code,
      id,
    },
  }
}
