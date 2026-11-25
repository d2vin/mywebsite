import { useRef } from 'react';
import Link from 'next/link';
import NavbarLink from './navbar-link';
import { ArrowUpRight } from 'lucide-react';
import ThemeToggle from './theme-toggle';
import { useHideOnScroll } from '../lib/useHideOnScroll';

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  useHideOnScroll(navRef);

  return (
    // The header holds the nav's place in the page; the nav itself floats (position: fixed) above it.
    <header className="site-header">
      <nav ref={navRef} className="site-nav">
        <Link href="/">
          <a className="brand-mark" aria-label="Devin Minnihan, home">
            <span>DM</span>
            <i />
          </a>
        </Link>
        <div className="nav-links" aria-label="Main navigation">
          <NavbarLink linkText="Home" href="/" />
          <NavbarLink linkText="Notes" href="/posts" />
          <NavbarLink linkText="Paint" href="/paint" />
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/contact">
            <a className="nav-contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
