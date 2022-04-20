import fs from 'fs'
import { cwd } from 'process'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'
import rehypeHighlightCode from '@/lib/rehype-highlight-code'
import rehypeMetaAttribute from '@/lib/rehype-meta-attribute'
import remarkSlug from 'remark-slug'

import type { Frontmatter } from '@/types/frontmatter'

export const dataDirectory = path.join(cwd(), 'data')
export const blogDirectory = path.join(dataDirectory, 'blog')

export async function getPostDataMDX(id) {
  const source = fs.readFileSync(path.join(blogDirectory, `${id}.mdx`), 'utf8')

  const { frontmatter, code } = await bundleMDX({
    source,
    mdxOptions(options, _frontmatter) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttribute,
        rehypeHighlightCode,
      ]

      return options
    },
  })

  return {
    frontmatter,
    code,
    id,
  }
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(blogDirectory) as string[]

  return filenames.map((filename) => ({
    params: {
      id: filename.replace(/\.mdx$/, ''),
    },
  }))
}
