import Head from "next/head";
import Image from "next/image";

import Layout from "../../components/layout";
import Date from "../../components/date"
import { getAllPostIds, getPostData } from "../../lib/posts"

import utilStyles from "../../styles/utils.module.css"
import cardStyles from "../../components/card.module.css"

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        postData.title
                    )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={postData.title} />
            </Head>
            <article >
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                    <span> · {postData.time.text}</span>
                </div>
                <div className={`${cardStyles.avatarTitle} ${utilStyles.lightText}`} style={{ margin: '1rem 0rem' }}>
                    <span>-</span>
                    <Image width="30" height="30" src="/images/profile_2.jpg" alt="Avatar" />
                    <span>Carlos López</span>
                </div>
                <div className={`${utilStyles.fontPost} ${utilStyles.spaceList}`} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}
