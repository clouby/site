import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { ArrowLeftIcon } from "@primer/octicons-react"
import Footer from "./footer";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Carlos López"
export const nickname = "clouby"
export const siteTitle = `${nickname} - Front-end Developer`

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Personal Website - Tech Posts &amp; Personal Experiences"
                />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {
                    home ?
                        (
                            <>
                                <div className={styles.mainAvatar}>
                                    <Image
                                        src="/images/profile_2.jpg"
                                        alt="Picture Profile"
                                        layout="intrinsic"
                                        height="250"
                                        width="250"
                                        placeholder="blur"
                                        blurDataURL="/images/blur.png"
                                    />
                                </div>
                                <h1 className={utilStyles.heading2Xl}>
                                    {name}
                                    <b className={`${styles.nick} ${styles.spaceDot}`}>·</b>
                                    <span className={styles.nick}>
                                        ({nickname})
                                    </span>
                                </h1>
                            </>
                        ) : (
                            <>
                                <div className={`${utilStyles.heading2Xl} ${styles.headPost}`}>
                                    <Link href="/#blog" rel="noreferrer">
                                        <a className={`${utilStyles.colorInherit} ${styles.nick}`} title="Back to Blog">
                                            <ArrowLeftIcon size={48}/>
                                        </a>
                                    </Link>
                                    <Link href="/" rel="noreferrer">
                                        <a className={`${utilStyles.colorInherit} ${styles.nick}`} title="Home">
                                            ▲
                                        </a>
                                    </Link>
                                </div>
                            </>
                        )
                }
            </header>
            <main>{children}</main>
            <Footer>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><a href="https://github.com/clouby" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a href="http://twitter.com/cloubyy" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><Link href="/#blog" >Blog</Link></li>
                </ul>
            </Footer>
        </div>
    );
}
