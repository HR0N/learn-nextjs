import '../styles/globals.css'
import Head from "next/head";
import React from "react";

export default function App({Component, pageProps}) {
    return <>
        <Head>
            <title>Learn Next JS</title>
        </Head>
        <Component {...pageProps} />
    </>;
}
