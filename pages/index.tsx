import type { NextPage } from 'next';
import Head from 'next/head';
import Masthead from '../components/masthead';
import Layout from '../components/layout';
import Works from '../components/experience';
import GithubActivity from '../components/github-activity';
import { getGithubActivity, type GithubActivity as GithubActivityData } from '../lib/github';

const Home: NextPage<{ githubActivity: GithubActivityData | null }> = ({ githubActivity }) => {
  return (
    <>
      <Head>
        <title>Devin Minnihan — Software Engineer & Designer</title>
        <meta name="description" content="The portfolio of Devin Minnihan, a software engineer and designer in New York." />
      </Head>
      <Layout>
        <Masthead />
        <GithubActivity activity={githubActivity} />
        <Works />
      </Layout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: { githubActivity: await getGithubActivity() },
    revalidate: 3600,
  };
}
