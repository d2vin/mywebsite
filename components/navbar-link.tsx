import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavbarLinkProps {
  linkText: string;
  href: string;
}

// Abbreviation map
const abbreviationMap: Record<string, string> = {
  Home: 'HM',
  Posts: 'PO',
  Contact: 'CT',
  Paint: 'PT',
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ linkText, href }) => {
  const abbreviation =
    abbreviationMap[linkText] || linkText.slice(0, 2).toUpperCase();

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const gradientTextClasses =
    'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent';

  return (
    <Link href={href}>
      <motion.p
        className="p-1 sm:p-2 rounded-xl hover:dark:text-black hover:bg-neutral-200 hover:cursor-pointer"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Full Text for larger screens */}
        <motion.span
          className={`hidden sm:inline-block font-extrabold tracking-wide text-md uppercase ${gradientTextClasses}`}
          variants={textVariants}
        >
          {linkText}
        </motion.span>

        {/* Abbreviated text for small screens */}
        <motion.span
          className={`sm:hidden text-2xl font-extrabold uppercase tracking-widest ${gradientTextClasses}`}
          variants={textVariants}
        >
          {abbreviation}
        </motion.span>
      </motion.p>
    </Link>
  );
};

export default NavbarLink;
