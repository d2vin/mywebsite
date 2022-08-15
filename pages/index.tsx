import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Masthead from '../components/masthead';
import Navbar from '../components/navbar';
import ContactMe from '../components/contact-me';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Masthead />
        <h1 className="text-4xl">Featured Posts</h1>
        <a href="#">
          <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
            hello
          </div>
        </a>
      </Layout>
    </>
  );
};

export default Home;
