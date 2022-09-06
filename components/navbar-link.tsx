import React from 'react';
import Link from 'next/link';

interface NavbarLinkProps {
  linkText: string;
  href: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ linkText, href }) => {
  return (
    <Link href={href}>
      <p className="p-2 rounded-xl hover:dark:text-black hover:bg-neutral-200 hover:cursor-pointer">
        {linkText}
      </p>
    </Link>
  );
};

export default NavbarLink;
