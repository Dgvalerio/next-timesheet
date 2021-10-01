import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Grid, Typography } from '@mui/material';

import Loading from '../components/loading';

const Home: NextPage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) return <Loading />;

  if (!session) {
    router.replace('/auth/signin');
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Next Timesheet - Home</title>
      </Head>

      <Grid container justifyContent="center" alignSelf="center" gap={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h3">
            Hello, {session.user?.name}!
          </Typography>
          <Typography>Signed in as {session.user?.email}</Typography>
          <Button variant="outlined" onClick={() => signOut()}>
            Sign out
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
