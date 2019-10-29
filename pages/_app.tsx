import 'isomorphic-fetch';
import * as React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { getStore } from '../src/store';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

class JuicyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const server = !!ctx.req;
    const store = getStore(undefined, server);
    const state = store.getState();
    const out = { state, server } as any;

    if (Component.getInitialProps) {
      return {
        ...out,
        pageProps: {
          ...(await Component.getInitialProps({ ...ctx, state })),
        },
      };
    }

    return out;
  }

  render() {
    const { props } = this as any;
    const { Component, pageProps } = props;

    return (
      <Provider store={getStore(undefined, props.server)}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(getStore)(withReduxSaga(JuicyApp));
