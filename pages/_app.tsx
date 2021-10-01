import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Timesheet Next</title>
      <meta name="description" content="Timesheet Next" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
