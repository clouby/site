import { useMemo } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMDXComponent } from "mdx-bundler/client";

import { getAllPostIds, getPostDataMDX } from "@/lib/mdx";
import { p, mdx, span } from "@/styles";
import Date from "@/components/date";
import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "@/components/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const postIds = getAllPostIds();

  return {
    paths: postIds,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostDataMDX(params.id);

  return {
    props: {
      post,
    },
  };
};

export default function Post({ post: { frontmatter, code } }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Link href="/">
        <>
          <ArrowLeftIcon size={16} />
          <span className={span({ spacing: "x" })}>Back to Home</span>
        </>
      </Link>
      <h1 className={p({ variant: "title" })}>{frontmatter.title}</h1>
      <Date dateString={frontmatter.date} /> · {frontmatter.readingTime.text}
      <Component
        components={{ p: mdx.P, h2: mdx.H2, a: mdx.A, h3: mdx.H3, ul: mdx.UL }}
      />
    </>
  );
}
