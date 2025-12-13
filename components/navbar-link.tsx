import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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

  const gradientTextClasses =
    'bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 bg-clip-text text-transparent';

  // State to track if the initial mount has happened for THIS instance
  const [hasMounted, setHasMounted] = useState(false);

  // Set hasMounted to true only on the initial mount
  useEffect(() => {
    // This runs once when this specific NavbarLink is first rendered
    setHasMounted(true);
  }, []);

  // Conditionally apply the fade-in class on the first render, 
  // then apply opacity-100 to ensure it remains visible.
  const animationClass = hasMounted ? 'opacity-100' : 'animate-fade-in';

  return (
    <Link href={href}>
      {/* Apply the conditional class string */}
      <p className={`${animationClass} p-1 sm:p-2 rounded-xl hover:dark:text-black hover:bg-neutral-200 hover:cursor-pointer`}>
        {/* Full Text for larger screens */}
        <span
          className={`hidden sm:inline-block font-extrabold tracking-wide text-md uppercase ${gradientTextClasses}`}
        >
          {linkText}
        </span>

        {/* Abbreviated text for small screens */}
        <span
          className={`sm:hidden text-xl font-extrabold uppercase tracking-widest ${gradientTextClasses}`}
        >
          {abbreviation}
        </span>
      </p>
    </Link>
  );
};

export default NavbarLink;