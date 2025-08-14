import React from 'react';
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

  return (
    <Link href={href}>
      <p className="animate-fade-in p-1 sm:p-2 rounded-xl hover:dark:text-black hover:bg-neutral-200 hover:cursor-pointer">
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