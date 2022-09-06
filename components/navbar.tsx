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
        <NavbarLink linkText={'Contact'} href={'/contact'} />
      <NavbarLink linkText={'Works'} href={'/works'} />
      </div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="flex justify-center items-center p-2 mx-2"
      >
        <Image
          src={theme === 'dark' ? '/sun.png' : '/moon.png'}
          width={32}
          height={32}
          alt="sunset icon"
        />
      </button>
    </nav>
  );
};

export default Navbar;
