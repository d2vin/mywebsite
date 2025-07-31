import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // For animation

interface NavbarLinkProps {
  linkText: string;
  href: string;
}

// Define your emoji mapping for each use case
const emojiMap: Record<string, string> = {
  Home: '🏠',
  Posts: '📚',
  Contact: '✉️',
  Paint: '🎨',
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ linkText, href }) => {
  const emoji = emojiMap[linkText] || '🔗'; // Default emoji if not found

  // Animation variants for Framer Motion
  const emojiVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Link href={href}>
      <p className="p-2 rounded-xl hover:dark:text-black hover:bg-neutral-200 hover:cursor-pointer">
        {/* Full text for larger screens */}
        <span className="hidden sm:inline">{linkText}</span>

        {/* Emoji with animation for small screens */}
        <motion.span
          className="sm:hidden text-2xl font-bold" // Increased text size for emoji
          variants={emojiVariants}
          initial="hidden"
          animate="visible"
        >
          {emoji}
        </motion.span>
      </p>
    </Link>
  );
};

export default NavbarLink;
