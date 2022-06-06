import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const pathName = useRouter().asPath.replace("/", "");
  return <Component {...pageProps} />;
}

export default MyApp;
