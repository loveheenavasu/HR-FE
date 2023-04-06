import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/next-sidebar@1/assets/css/next-sidebar.min.css"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/next-sidebar@1/assets/js/next-sidebar.min.js" />
    </Html>
  );
}
