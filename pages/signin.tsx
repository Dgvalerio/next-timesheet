import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Grid, Typography } from '@mui/material';

import Loading from '../components/loading';

const SignIn: NextPage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) return <Loading />;

  if (session) {
    router.replace('/');
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Next Timesheet - SignIn</title>
      </Head>

      <Grid container justifyContent="center" alignSelf="center" gap={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h3" align="center">
            Entre com sua conta do GitHub
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => signIn()}>
            Conectar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;
