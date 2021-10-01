import { NextPage } from 'next';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import {
  Container,
  CssBaseline,
  ThemeProvider as MUIProvider,
} from '@mui/material';
import { ThemeProvider as StyledProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Timesheet Next</title>
    </Head>
    <Provider session={pageProps.session}>
      <MUIProvider theme={theme}>
        <CssBaseline />
        <StyledProvider theme={theme}>
          <GlobalStyles />
          <Container style={{ display: 'flex', minHeight: '100vh' }}>
            <Component {...pageProps} />
          </Container>
        </StyledProvider>
      </MUIProvider>
    </Provider>
  </>
);

export default MyApp;
