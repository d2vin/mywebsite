import React from 'react';
import Image from 'next/image';
import NavbarLink from './navbar-link';
import { useTheme } from 'next-themes';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="rounded-2xl flex items-center justify-between border border-black dark:border-white dark:text-white text-black mx-4 md:mx-0 transition-all">
      <div className="p-2 w-1/2 flex">
        <NavbarLink linkText={'Home'} href={'/'} />
        <NavbarLink linkText={'Posts'} href={'/posts'} />
        <NavbarLink linkText={'Contact'} href={'/contact'} />
        <NavbarLink linkText={'Paint'} href={'/paint'} />
      </div>
      <div className="flex items-center justify-end space-x-2">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex justify-center items-center mt-1.5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Start hidden and slightly smaller
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale to original size
            transition={{
              duration: 0.4,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }} // Smooth spring, plays once
            whileHover={{ scale: 1.05 }} // Subtle scale up on hover
            whileTap={{ scale: 0.95 }} // Subtle scale down on tap
          >
            <Image
              src={theme === 'light' ? '/moon.png' : '/sun.png'}
              width={30}
              height={30}
              alt="theme icon"
            />
          </motion.div>
        </button>
        <a
          href="https://github.com/d2vin"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <AiFillGithub
            className={`${theme === 'light'} ? 'text-black' : 'text-white'`}
            size={26}
          />
        </a>
        <motion.a
          href="https://www.linkedin.com/in/devin-m-6225a6176/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center pr-4"
          initial={{ opacity: 0, scale: 0.8 }} // Start hidden and slightly smaller
          animate={{ opacity: 1, scale: 1 }} // Fade in and scale to original size
          transition={{
            duration: 0.4,
            delay: 0.1,
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }} // Smooth spring with slight delay, plays once
          whileHover={{ scale: 1.05 }} // Subtle scale up on hover
          whileTap={{ scale: 0.95 }} // Subtle scale down on tap
        >
          <Image src="/linkedin.png" alt="linkedin" width={30} height={30} />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
