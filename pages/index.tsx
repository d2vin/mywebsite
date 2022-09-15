import type { NextPage } from 'next';
import Head from 'next/head';
import Masthead from '../components/masthead';
import Layout from '../components/layout';
import Works from '../components/experience';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Masthead />
        <Works />
      </Layout>
    </>
  );
};

export default Home;
