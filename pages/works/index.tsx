import type { NextPage } from 'next';
import Head from 'next/head';
import Masthead from '../../components/masthead';
import Layout from '../../components/layout';
import Projects from '../../components/projects';

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <Layout>
        <Projects />
      </Layout>
    </>
  );
};

export default Works;
