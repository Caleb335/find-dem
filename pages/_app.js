import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Messing with Redux</title>
        <link rel="icon" href="" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
