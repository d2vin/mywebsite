import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Layout from '../../components/layout';
import { getSortedPostsData } from '../../utils/posts';

const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`));

export async function getStaticProps() {
  return { props: { allPostsData: getSortedPostsData() } };
}

export default function Posts({ allPostsData }: any) {
  return (
    <Layout>
      <Head><title>Notes — Devin Minnihan</title><meta name="description" content="Notes on software, design, and the work behind the work." /></Head>
      <section className="page-section">
        <span className="page-eyebrow">Field notes</span>
        <h1 className="page-title">Stories from behind<br />the screen.</h1>
        <div className="post-list">
          {allPostsData.map(({ id, date, title }: any) => (
            <Link key={id} href={`/posts/${id}`}>
              <a className="post-card"><h2>{title}</h2><time dateTime={date}>{formatDate(date)}</time><ArrowUpRight size={17} /></a>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
