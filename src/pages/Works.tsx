import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Shell, SecHead, PageWrap } from '../components/ui';
import { photoFor } from '../utils/placeholders';
import { worksImages, resolveImg } from '../utils/siteImages';
import { works } from '../data/works';

type Cat = 'All' | 'Video' | 'Music' | 'Event';

const cats: Cat[] = ['All', 'Video', 'Music', 'Event'];

export function WorksPage() {
  const [active, setActive] = useState<Cat>('All');
  const visible = active === 'All' ? works : works.filter((w) => w.c === active);

  return (
    <PageWrap>
      <Shell>
        <section className="pb-12 pt-[120px] lg:pt-[140px]">
          <SecHead
            className="mb-8"
            eyebrow="Works — 今までの実績"
            title="記録の、いち部分。"
            right={
              <p className="text-[15px] leading-[1.8] text-ink-600">
                アーティストや個人の方との仕事を中心に、ご紹介できるものだけ載せています。NDA等で公開できないものも、たくさんあります。
              </p>
            }
          />
          <div className="mb-12 flex flex-wrap gap-2">
            {cats.map((c) => {
              const on = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ${
                    on
                      ? 'border-ink-900 bg-ink-900 text-ink-50'
                      : 'border-ink-300 text-ink-600 hover:border-ink-700 hover:text-ink-900'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((w, i) => {
                const origIdx = works.indexOf(w);
                return (
                <div key={`${w.t}-${i}`} className="group flex cursor-pointer flex-col gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                      style={{
                        backgroundImage: `url('${resolveImg(worksImages[origIdx] ?? '', photoFor(w.kind, w.seed + i, { w: 900, h: 700 }))}')`,
                      }}
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-ink-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-800">
                      {w.c}
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-serif text-[18px] tracking-[-0.005em] text-ink-900">
                      {w.t}
                    </div>
                    <div className="font-mono text-[11px] tracking-[0.1em] text-ink-500">{w.y}</div>
                  </div>
                  <div className="text-[13px] text-ink-500">{w.sub}</div>
                </div>
                );
              })}
            </div>
          </Reveal>
        </section>
      </Shell>
    </PageWrap>
  );
}
