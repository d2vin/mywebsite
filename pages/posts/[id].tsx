import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../utils/posts';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: any) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <section className="transition-all ml-4 mr-4 md:mx-0 sm:pt-20 md:pt-20 pt-20">
        <Link href={'/posts'}>
          <div className="flex items-center cursor-pointer">
            <Image
              src={theme === 'dark' ? '/back-dark.png' : '/back.png'}
              height={32}
              width={32}
              alt="Back button"
            />
            Back
          </div>
        </Link>
        <h1 className="pt-8 text-4xl md:pl-0 transition-all">
          {postData.title}
        </h1>
        <br />
        <div
          className="text-lg font-medium leading-relaxed mt-0 mb-4"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <p className="text-lg font-medium leading-relaxed mt-0 mb-4">
          The design of this website took inspiration from{' '}
          <span className="font-bold cursor-pointer hover:text-red-500">
            <a target="_blank" href={postData.ref} rel="noreferrer">
              {postData.inspo}
            </a>
          </span>{' '}
          and their parallax design trends. You can find a link to the finished
          product{' '}
          <span className="font-bold cursor-pointer hover:text-red-500">
            <a target="_blank" href={postData.link} rel="noreferrer">
              here
            </a>
          </span>
          .
        </p>
      </section>
    </Layout>
  );
}
