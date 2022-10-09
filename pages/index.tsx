import Head from "next/head";
import Image from "next/image";

import { siteTitle } from "@/components/layout";
import Link from "@/components/link";
import { p } from "@/styles";
import me from "@/data/me";

const { post, poetry, github, twitter, generativeCoding } = me.links;

export default function Home() {
  return (
    <>
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
        <h1 className={p({ variant: "title" })}>{me.name}.</h1>
        <h2 className={p({ variant: "subtitle" })}>{me.role} and writer.</h2>
        <p className={p({ variant: "content" })}>
          Hi, I&apos;m Software Engineer (focused Mobile/Front-end Development),
          which I program all day and at night I try to focus time about being
          more friendly with <strong>UX</strong> and{" "}
          <strong>generative coding</strong>.
        </p>
        <p className={p({ variant: "content" })}>
          Some days write some <Link href={post.link}>{post.name}</Link>,the one
          or another <Link href={poetry.link}>{poetry.name}</Link> in the way,
          also I&apos;m beginner about{" "}
          <Link href={generativeCoding.link}>{generativeCoding.name}</Link>{" "}
          making cool stuffs for chilling, you can reach me{" "}
          <Link href={github.link}>{`/${github.name}`}</Link> or{" "}
          <Link href={twitter.name}>{`/${twitter.name}`}</Link>
        </p>
      </section>
    </>
  );
}

export function getStaticProps() {
  const allPostsData = [];
  const allTalksData = [];

  return {
    props: {
      allPostsData,
      allTalksData,
    },
  };
}
