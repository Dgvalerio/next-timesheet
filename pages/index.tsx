import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

      <main>
        <h1>Hello, {session.user?.name}!</h1>
        Signed in as {session.user?.email} <br />
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </main>
    </>
  );
};

export default Home;
