import React from 'react';
import Head from 'next/head'

import AppLayout from "../components/AppLayout";


const Home = () => {
    return (
        <>
            <Head>
                <title>인덱스</title>
            </Head>
            <AppLayout>
                <div>Hello, next</div>
            </AppLayout>
        </>
    );
}

export default Home;