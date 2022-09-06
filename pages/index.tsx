import type { NextPage } from 'next';
import Head from 'next/head';
import Masthead from '../components/masthead';
import Layout from '../components/layout';
import Projects from '../components/projects';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Masthead />
        <Projects />
      </Layout>
    </>
  );
};

export default Home;
