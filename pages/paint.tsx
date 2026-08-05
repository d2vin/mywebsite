import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import Paint from '@/components/paint';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paint — Devin Minnihan</title>
        <meta name="description" content="A tiny interactive paint canvas by Devin Minnihan." />
      </Head>
      <Layout>
        <Paint />
      </Layout>
    </>
  );
};

export default Home;
