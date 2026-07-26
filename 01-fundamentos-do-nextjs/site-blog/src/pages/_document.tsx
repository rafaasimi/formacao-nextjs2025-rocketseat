import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <title>Site.Set - Landing Page e Blog</title>
        <link rel="icon" type="image/svg" href="/brand-icon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
