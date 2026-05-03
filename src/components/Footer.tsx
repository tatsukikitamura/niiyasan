import React from 'react';
import { Arrow } from './icons';
import type { PageId } from '../types';

type Props = {
  setPage: (p: PageId) => void;
};

export function Footer({ setPage }: Props) {
  const go = (id: PageId) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  const colA: { label: string; id: PageId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Works', id: 'works' },
    { label: 'Journal', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="mt-32 bg-ink-900 pb-8 pt-24 text-ink-300">
      <div className="mx-auto w-full max-w-shell px-gutter">
        <div className="flex flex-wrap items-end justify-between gap-8 py-12">
          <div className="font-serif text-footer-q text-ink-50 max-w-[700px]">
            <em className="not-italic text-accent">つくる</em>こと、
            <br />
            一緒に始めませんか。
          </div>
          <a
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink-50 px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.16em] text-ink-900 transition-colors duration-300 hover:bg-accent hover:text-ink-50"
            onClick={() => go('contact')}
          >
            Get in touch <Arrow s={12} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-12 border-b border-[color-mix(in_srgb,var(--ink-300)_18%,transparent)] pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex flex-col gap-4 lg:col-span-1">
            <div className="font-serif text-[36px] tracking-[-0.015em] text-ink-50">Moovit</div>
            <p className="max-w-[320px] text-[13px] leading-[1.7] text-ink-400">
              映像、音楽、イベント。表現することすべての裏側に、わたしたちはいます。
            </p>
          </div>

          <FooterCol title="Sitemap">
            {colA.map((l) => (
              <li key={l.id}>
                <a
                  className="cursor-pointer text-[14px] text-ink-100 transition-colors duration-200 hover:text-accent"
                  onClick={() => go(l.id)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {['動画制作', '楽曲制作', 'イベント制作'].map((t) => (
              <li key={t}>
                <a className="cursor-pointer text-[14px] text-ink-100 transition-colors duration-200 hover:text-accent">
                  {t}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            {['Instagram', 'X / Twitter', 'YouTube', 'SoundCloud'].map((t) => (
              <li key={t}>
                <a className="cursor-pointer text-[14px] text-ink-100 transition-colors duration-200 hover:text-accent">
                  {t}
                </a>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[color-mix(in_srgb,var(--ink-300)_18%,transparent)] pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
          <div>© 2026 Moovit</div>
          <div>東京都 / Tokyo, Japan</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
        {title}
      </h4>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0">{children}</ul>
    </div>
  );
}
