import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Masthead from '../components/masthead';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container mx-auto max-w-2xl pt-8">
        <Navbar />
        <Masthead />
      </div>
    </>
  );
};

export default Home;
