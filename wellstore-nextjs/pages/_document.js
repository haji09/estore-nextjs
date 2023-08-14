import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <body className="bg-[url('/assets/images/bg2.jpg')] bg-cover bg-center  font-bodyFont">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
