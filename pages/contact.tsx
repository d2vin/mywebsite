import React from 'react';
import ContactMe from '../components/contact-me';
import { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Layout>
        <ContactMe />
      </Layout>
    </>
  );
};

export default Contact;
