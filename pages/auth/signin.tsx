import type { GetServerSideProps, NextPage } from 'next';
import {
  ClientSafeProvider,
  getProviders,
  signIn,
  useSession,
} from 'next-auth/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Grid, Typography } from '@mui/material';

import Loading from '../../components/loading';

type SignInParams = { providers: Record<string, ClientSafeProvider> | null };

const SignIn: NextPage<SignInParams> = ({ providers }) => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading || !providers) return <Loading />;

  if (session) {
    router.replace('/');
    return <Loading />;
  }

  const handleSignIn = (providerId: string) => {
    signIn(providerId);
  };

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
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <Button
                variant="outlined"
                onClick={() => handleSignIn(provider.id)}
              >
                Conectar {provider.name}
              </Button>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SignInParams> =
  async () => {
    const providers = await getProviders();

    return {
      props: { providers },
    };
  };

export default SignIn;
