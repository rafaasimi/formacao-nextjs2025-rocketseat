import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

// O _app é renderizado pelo servidor e pelo browser. 
// Serve como um wrapper  para englobar todos os nossos componentes. 
// É nela que vamos utilizar nossos providerspor exemplo, quando utilizarmos themes, contexts, global estyles, etc…

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Site.Set | Venda de produtos digitais</title>
    </Head>
    <Component {...pageProps} />
    </>
  );
}
