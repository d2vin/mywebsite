import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Works from '../../components/experience';
import { getSortedPostsData } from '../../utils/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Index({ allPostsData }: any) {
  return (
    <Layout>
      <section className="transition-all ml-4 mr-4 md:mx-0 sm:pt-20 md:pt-20 pt-20">
        <h1 className="sm:text-6xl text-3xl transition-all">
          🗒️ Featured Posts
        </h1>
        <ul className="pt-8">
          {allPostsData.map(({ id, date, title }: any) => (
            <>
              <Link key={id} href={`posts/${id}`}>
                <div className="cursor-pointer w-7/8 border-b border-black dark:border-gray-200 py-3 transform hover:scale-[1.01] transition-all">
                  <div className="flex justify-between">
                    <h1>{title}</h1>
                    <div>{date}</div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
