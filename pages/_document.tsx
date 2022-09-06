import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-neutral-100 dark:bg-gradient-to-r from-black via-black to-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
