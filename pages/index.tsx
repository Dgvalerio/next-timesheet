import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Container, Typography } from '@mui/material';

const Home: NextPage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) return <h1>loading...</h1>;

  if (!session) {
    router.replace('/signin');
    return <h1>Unauthorized</h1>;
  }

  return (
    <>
      <Head>
        <title>Next Timesheet - Home</title>
      </Head>

      <Container>
        <Typography component="h1" variant="h3">
          Hello, {session.user?.name}!
        </Typography>
        <Typography>Signed in as {session.user?.email}</Typography>
        <Button onClick={() => signOut()}>Sign out</Button>
      </Container>
    </>
  );
};

export default Home;
