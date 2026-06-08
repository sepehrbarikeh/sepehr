import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Sepehr Barikeh | توسعه‌دهنده فرانت‌اند</title>
      <link rel="icon" href="/logo/logo.png" />
      <link rel="apple-touch-icon" href="/logo/logo.png" />
    </Head>
    <Component {...pageProps} />
  </>
}
