import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../utils/posts';

export async function getStaticProps({ params }: any) { return { props: { postData: await getPostData(params.id) } }; }
export async function getStaticPaths() { return { paths: getAllPostIds(), fallback: false }; }

export default function Post({ postData }: any) {
  return (
    <Layout>
      <Head><title>{postData.title} — Devin Minnihan</title></Head>
      <article className="page-section post-body">
        <Link href="/posts"><a className="back-link"><ArrowLeft size={14} /> All notes</a></Link>
        <h1 className="page-title">{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <p>Visit the project <a href={postData.link} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)' }}>here ↗</a>.</p>
      </article>
    </Layout>
  );
}
