import Link from "@/components/link";
import { getAllPostIds } from "@/lib/mdx";
import { List, p, ItemList } from "@/styles";

type Props = {
  children: JSX.Element;
  postIds: Array<{ params: { id: string; path: string } }>;
};

export default function Blog({ postIds }: Props) {
  return (
    <>
      <h2 className={p({ variant: "title" })}>Blog</h2>
      <List type="content">
        {postIds.map((post, index) => (
          <ItemList key={index} title="subheading">
            <Link href={post.params.path}>{post.params.id}</Link>
          </ItemList>
        ))}
      </List>
    </>
  );
}

export async function getStaticProps() {
  const postIds = getAllPostIds();

  return {
    props: {
      postIds,
    },
  };
}
