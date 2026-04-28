import { useEffect, useState } from 'react';
import { Logo, Arrow } from './icons';
import type { PageId } from '../types';

type Props = {
  page: PageId;
  setPage: (p: PageId) => void;
};

const links: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'works', label: 'Works' },
  { id: 'blog', label: 'Journal' },
];

export function Nav({ page, setPage }: Props) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: PageId) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-logo" onClick={() => go('home')}>
          <Logo />
          <span>会社名(仮)</span>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              className={`nav-link ${page === l.id ? 'active' : ''}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </a>
          ))}
          <a className="nav-cta" onClick={() => go('contact')}>
            Contact <Arrow s={12} />
          </a>
        </div>
      </div>
    </nav>
  );
}
