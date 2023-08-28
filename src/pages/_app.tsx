import RootLayout from "components/layout";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
