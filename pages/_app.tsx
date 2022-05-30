import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // add a custom title for all components
  return <Component {...pageProps} title='Yarison | allain' />;
}

export default MyApp;
