import { useMemo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'

import { getAllPostIds, getPostDataMDX } from '@/lib/mdx'
import { p } from '@/styles'

export const getStaticPaths: GetStaticPaths = async () => {
    const postIds = await getAllPostIds()

    return {
        paths: postIds,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getPostDataMDX(params.id)

    return {
        props: {
          post
        }
    }
}

export default function Post({ post: { frontmatter, code } }) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <h1 className={p({ variant: 'title' })}>{frontmatter.title}</h1>
      <Component/>
    </>
  )
}