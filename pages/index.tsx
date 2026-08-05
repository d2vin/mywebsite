import type { NextPage } from 'next';
import Head from 'next/head';
import Masthead from '../components/masthead';
import Layout from '../components/layout';
import Works from '../components/experience';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Devin Minnihan — Software Engineer & Designer</title>
        <meta name="description" content="The portfolio of Devin Minnihan, a software engineer and designer in New York." />
      </Head>
      <Layout>
        <Masthead />
        <Works />
      </Layout>
    </>
  );
};

export default Home;
