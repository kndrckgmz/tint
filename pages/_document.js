import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="tic-tac-toe, tic tac toe, multiplayer, game, colors, colours, minimal" />

          <meta property="og:title" content="Tint" />
          <meta property="og:description" content="Tic-tac-toe with colours" />
          <meta property="og:image" content="/favicon.ico" />
          {/* <meta property="og:image:secure_url" content="/favicon.ico" /> */}

          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument