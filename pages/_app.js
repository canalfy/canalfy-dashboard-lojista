import Router from 'next/router'
import Head from 'next/head'

import GlobalStyle from '../src/styles/global'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import NProgress from 'nprogress'

config.autoAddCss = false;

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Dashboard Canalfy</title>
                <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp