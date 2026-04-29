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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const go = (id: PageId) => {
    setPage(id);
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[80] border-b transition-[border-color,background] duration-300 bg-[color-mix(in_srgb,var(--ink-50)_88%,transparent)] backdrop-blur-[14px] backdrop-saturate-[1.6] ${
          scrolled ? 'border-ink-200' : 'border-transparent'
        }`}
      >
        <div className="mx-auto flex h-nav max-w-shell items-center justify-between px-gutter">
          <a
            className="flex cursor-pointer items-center gap-2.5 font-serif text-[20px] tracking-[-0.01em]"
            onClick={() => go('home')}
          >
            <Logo />
            <span>会社名(仮)</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => {
              const active = page === l.id;
              return (
                <a
                  key={l.id}
                  className={`relative cursor-pointer py-1.5 font-mono text-[11.5px] uppercase tracking-[0.16em] transition-colors duration-200 ${
                    active
                      ? 'text-ink-900 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-3 after:bg-accent after:content-[""]'
                      : 'text-ink-700 hover:text-ink-900'
                  }`}
                  onClick={() => go(l.id)}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink-800 bg-ink-800 px-[18px] py-2.5 font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-50 transition-all duration-[250ms] hover:border-accent hover:bg-accent"
              onClick={() => go('contact')}
            >
              Contact <Arrow s={12} />
            </a>
          </div>

          <button
            className={`flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border border-ink-300 bg-transparent transition-[background,border-color] duration-200 hover:border-ink-700 lg:hidden`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-[1.5px] w-4 bg-ink-800 transition-transform duration-300 ${
                open ? 'translate-y-[3.25px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-ink-800 transition-transform duration-300 ${
                open ? '-translate-y-[3.25px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 bottom-0 top-nav z-[70] overflow-y-auto bg-ink-50 transition-[transform,opacity] duration-300 ${
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-1 px-gutter pb-12 pt-8">
          {links.map((l) => {
            const active = page === l.id;
            return (
              <a
                key={l.id}
                className={`flex cursor-pointer items-baseline justify-between border-b border-ink-200 py-4 font-serif text-[32px] tracking-[-0.015em] transition-colors duration-200 hover:text-accent ${
                  active ? 'text-accent' : 'text-ink-900'
                }`}
                onClick={() => go(l.id)}
              >
                {l.label}
              </a>
            );
          })}
          <a
            className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-ink-900 px-7 py-[18px] font-mono text-[12px] uppercase tracking-[0.16em] text-ink-50 transition-colors duration-200 hover:bg-accent"
            onClick={() => go('contact')}
          >
            Contact <Arrow s={14} />
          </a>
        </div>
      </div>
    </>
  );
}
