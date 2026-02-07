import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>Fiona Leung</title>
        <link rel="icon" href="/images/f_logo.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
