import Head from 'next/head'

import GlobalStyle from '../src/styles/global'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Dashboard Canalfy</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp