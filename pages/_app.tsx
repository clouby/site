import Header from "@/components/header";
import Layout from "@/components/layout";

import { globalCss } from "@/styles/stitches.config";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "$inconsolata",
    lineHeight: "1rem",
  },
  body: {
    backgroundColor: "black",
    color: "$gray10",
    padding: "1rem 1.5rem 1.5rem",
  },
  p: {
    fontSize: "$1",
    lineHeight: "$2",
  },
  "::selection": {
    backgroundColor: "$gray12",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {globalStyles()}
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
