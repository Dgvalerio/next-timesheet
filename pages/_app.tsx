import { NextPage } from 'next';
import { Provider as AuthProvider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider as MUIProvider } from '@mui/material';
import { ThemeProvider as StyledProvider } from 'styled-components';

import Wrapper from '../components/wrapper';
import store from '../store';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Timesheet Next</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <MUIProvider theme={theme}>
          <CssBaseline />
          <StyledProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
          </StyledProvider>
        </MUIProvider>
      </Provider>
    </AuthProvider>
  </>
);

export default MyApp;
