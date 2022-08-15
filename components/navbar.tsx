import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="drop-shadow-xl rounded-2xl flex items-center justify-between w-full border border-black dark:border-white dark:text-white text-black">
      <div className="p-2 w-1/2 flex">
        <Link href={''}>
          <a
            className="mx-2 rounded-xl hover:dark:text-black hover:bg-slate-200"
            href="#"
          >
            Home
          </a>
        </Link>
        <Link href={''}>
          <a
            className="mx-2 rounded-xl hover:dark:text-black hover:bg-slate-200"
            href="#"
          >
            Works
          </a>
        </Link>
        <Link href={''}>
          <a
            className="mx-2 rounded-xl hover:dark:text-black hover:bg-slate-200"
            href="#"
          >
            About
          </a>
        </Link>
        <Link href={''}>
          <a
            className="mx-2 rounded-xl hover:dark:text-black hover:bg-slate-200"
            href="#"
          >
            About
          </a>
        </Link>
      </div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="bg-black"
      >
        <Image src={'/sunset.png'} width={20} height={20} alt="sunset icon" />
      </button>
    </nav>
  );
};

export default Navbar;
