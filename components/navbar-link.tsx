import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavbarLinkProps {
  linkText: string;
  href: string;
}

const NavbarLink = ({ linkText, href }: NavbarLinkProps) => {
  const router = useRouter();
  const isActive = href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <Link href={href}>
      <a className={`nav-link ${isActive ? 'nav-link-active' : ''}`} aria-current={isActive ? 'page' : undefined}>
        {linkText}
      </a>
    </Link>
  );
};

export default NavbarLink;
