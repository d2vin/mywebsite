import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavbarLink from './navbar-link';
import { useTheme } from 'next-themes';
import { AiFillGithub } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  // State to track if the component has been mounted
  const [hasMounted, setHasMounted] = useState(false);

  // Set hasMounted to true only on the initial mount
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Conditionally apply the fade-in class
  const animationClass = hasMounted ? 'opacity-100' : 'animate-fade-in';

  return (
    <nav 
      // The fade-in will happen on the first mount. 
      // After that, the opacity-100 class ensures it remains visible.
      className={`${animationClass} rounded-2xl flex items-center justify-between border border-black dark:border-white dark:text-white text-black mx-4 md:mx-0 transition-all`}
    >
      <div className="p-2 w-1/2 flex">
        <NavbarLink linkText={'Home'} href={'/'} />
        <NavbarLink linkText={'Posts'} href={'/posts'} />
        <NavbarLink linkText={'Contact'} href={'/contact'} />
        <NavbarLink linkText={'Paint'} href={'/paint'} />
      </div>
      {/* ... rest of the Navbar content */}
      <div className="flex items-center justify-end space-x-2">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex justify-center items-center mt-1.5"
        >
          <div>
            <Image
              src={theme === 'light' ? '/moon.png' : '/sun.png'}
              width={30}
              height={30}
              alt="theme icon"
            />
          </div>
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
        <a
          href="https://www.linkedin.com/in/devin-m-6225a6176/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center pr-4"
        >
          <Image src="/linkedin.png" alt="linkedin" width={30} height={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;