import App from "next/app";
import Link from "next/link";
import "../styles.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps };
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Link href="/">
          <a> Home </a>
        </Link>
        <Link href="/products">
          <a> Products </a>
        </Link>
        <Link href="/card">
          <a> Card </a>
        </Link>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default MyApp;
