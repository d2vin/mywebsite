import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Masthead from '../components/masthead';
import Navbar from '../components/navbar';
import ContactMe from '../components/contact-me';
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
