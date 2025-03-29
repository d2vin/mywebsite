import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import Paint from '@/components/paint';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paint</title>
      </Head>
      <Layout>
        <Paint />
      </Layout>
    </>
  );
};

export default Home;
