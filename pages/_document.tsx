import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const documentProps = await Document.getInitialProps(ctx);
    // let { req, renderPage } = args[0];
    const renderPage = ctx.renderPage;
    const page = renderPage();
    try {
      ctx.renderPage = () =>
        page({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      return {
        ...documentProps,
        ...page,
        styles: (
          <>
            {documentProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={process.env.SITE_NAME} />
          <meta property="og:title" content={process.env.SITE_TITLE} />
          <meta property="og:description" content={process.env.SITE_DESCRIPTION} />
          <meta property="og:image" content={process.env.SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={process.env.SITE_NAME} />
          <meta name="twitter:title" content={process.env.SITE_TITLE} />
          <meta name="twitter:description" content={process.env.SITE_DESCRIPTION} />
          <meta property="twitter:image" content={process.env.SITE_IMAGE} />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
