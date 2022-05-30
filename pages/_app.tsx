import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const pathName = useRouter().asPath.replace("/", "");
  return (
    <>
      <Head>
        <title>Cv | {pathName}</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
