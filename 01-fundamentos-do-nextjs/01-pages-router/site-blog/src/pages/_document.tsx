import { Html, Head, Main, NextScript } from "next/document";

// Já o _document é como se fosse nosso index.html, 
// é onde vamos controlar a importação de scripts, controlando a estrutura do nosso HTML, metatags, favicon. 
// Ele só é executado ao lado do servidor.

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
