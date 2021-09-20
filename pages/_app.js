import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tint</title>
      </Head>
      <div className="App">
        <div className="body">
          <Component {...pageProps} />
        </div>
      </div>
    </>)
}

export default MyApp
