import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container mx-auto max-w-2xl pt-8">
        <Navbar />
        <div className="flex items-center">
          <div className="max-w-lg">
            <h1 className="text-6xl pt-20">Devin Minnihan</h1>
            <p className="text-2xl font-extrabold">Parsons 2022</p>
            <p className="w-9/12">
              Software Developer studying{' '}
              <a
                href="https://www.newschool.edu/parsons/bba-design-management/"
                rel="noreferrer"
                target="_blank"
                className="hover:text-red-500"
              >
                Strategic Design & Management
              </a>{' '}
              at the Parsons School of Design
            </p>
          </div>
          <div className="w-2/5 h-full flex justify-center items-center">
            <Image
              src="/sunset.png"
              width={100}
              height={100}
              alt="sunset icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
