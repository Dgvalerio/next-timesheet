import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

const SignIn: NextPage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) return <h1>loading...</h1>;

  if (session) {
    router.replace('/');
    return <h1>Authorized</h1>;
  }

  return (
    <>
      <Head>
        <title>Next Timesheet - SignIn</title>
      </Head>

      <main>
        <h1>SignIn Page</h1>
        <button type="button" onClick={() => signIn()}>
          SignIn with GitHub
        </button>
      </main>
    </>
  );
};

export default SignIn;
