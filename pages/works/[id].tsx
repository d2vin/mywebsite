import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import Projects from '../../components/projects';
const Hello: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <Layout>
        <Projects />
        {id}
      </Layout>
    </>
  );
};

export default Hello;
