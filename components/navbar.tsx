import React from 'react';
import Image from 'next/image';
import NavbarLink from './navbar-link';
import { useTheme } from 'next-themes';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="rounded-2xl flex items-center justify-between border border-black dark:border-white dark:text-white text-black mx-4 md:mx-0 transition-all">
      <div className="p-2 w-1/2 flex">
        <NavbarLink linkText={'Home'} href={'/'} />
        <NavbarLink linkText={'Posts'} href={'/posts'} />
        <NavbarLink linkText={'Contact'} href={'/contact'} />
      </div>
      <div className="flex items-center justify-between ">
        <a
          href="https://www.linkedin.com/in/devin-minnihan-6225a6176/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center pr-1"
        >
          <Image src="/linkedin.png" alt="linkedin" width={30} height={30} />
        </a>
        <a
          href="https://github.com/d2vin"
          target="_blank"
          rel="noreferrer"
          className="flex items-center pr-1"
        >
          <Image
            src={theme === 'dark' ? '/github.png' : '/github-dark.png'}
            alt="github"
            width={30}
            height={30}
          />
        </a>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex justify-center items-center pr-2 mr-2"
        >
          <Image
            src={theme === 'dark' ? '/sun.png' : '/moon.png'}
            width={30}
            height={30}
            alt="sunset icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
