import { NextPage } from 'next';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <Head>
      <title>Timesheet Next</title>
      <meta name="description" content="Timesheet Next" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
