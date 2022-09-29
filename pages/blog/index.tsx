import Link from "@/components/link"
import { getAllPostIds } from "@/lib/mdx"
import { List, p } from "@/styles"

type Props = {
    children: JSX.Element,
    postIds: Array<{params: { id: string, path: string }}>
}

export default function Blog({ postIds }: Props) {
  return (
      <>
        <h2 className={p({ variant: 'title' })}>
          Blog
        </h2>
        <List>
          {postIds.map((post, index) => (
            <li key={index}>
              <Link href={post.params.path}>
                {post.params.id}
              </Link>
            </li>
          ))}
        </List>
      </>
  )
}

export async function getStaticProps() {
    const postIds = getAllPostIds()

    return {
        props: {
            postIds
        }
    }
}