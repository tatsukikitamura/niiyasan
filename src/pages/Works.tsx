import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Shell, SecHead, PageWrap } from '../components/ui';
import { photoFor, type PhotoKind } from '../utils/placeholders';

type Cat = 'All' | 'Video' | 'Music' | 'Event';

const cats: Cat[] = ['All', 'Video', 'Music', 'Event'];

const works: {
  t: string;
  c: Exclude<Cat, 'All'>;
  y: string;
  sub: string;
  seed: number;
  kind: PhotoKind;
}[] = [
  { t: '悠針れい / チノカテ', c: 'Video', y: '2026', sub: 'Music Video · 4K', seed: 1, kind: 'music-video' },
  { t: 'Sleeping Garden — EP', c: 'Music', y: '2026', sub: 'Compose · Mix · Master', seed: 2, kind: 'music' },
  {
    t: 'Mermaid Live 2026',
    c: 'Event',
    y: '2026',
    sub: 'Live Show · Tokyo Garden Theater',
    seed: 3,
    kind: 'live',
  },
  { t: 'Quiet River', c: 'Music', y: '2025', sub: 'Original Score', seed: 4, kind: 'music' },
  { t: 'Tokyo Sound Walk', c: 'Video', y: '2025', sub: 'Documentary · 24min', seed: 5, kind: 'documentary' },
  {
    t: '藤川 結衣 — 個展「白の空気」',
    c: 'Event',
    y: '2025',
    sub: 'Exhibition Production',
    seed: 6,
    kind: 'exhibition',
  },
  { t: '夜想曲 / Nocturne', c: 'Video', y: '2025', sub: 'Music Video', seed: 1, kind: 'music-video' },
  {
    t: 'haru — 1st Single「ここから」',
    c: 'Music',
    y: '2025',
    sub: 'Produce · Arrangement',
    seed: 2,
    kind: 'music',
  },
  { t: 'MIDNIGHT POPUP', c: 'Event', y: '2025', sub: 'Pop-up Store · Daikanyama', seed: 3, kind: 'exhibition' },
  {
    t: '石川 茉莉 — Tour 2025',
    c: 'Event',
    y: '2025',
    sub: 'Tour Production · 6 cities',
    seed: 4,
    kind: 'live',
  },
  {
    t: 'Field Recordings vol.1',
    c: 'Music',
    y: '2024',
    sub: 'Sound Design · Compilation',
    seed: 5,
    kind: 'music',
  },
  { t: 'Documentary: 街を編む人', c: 'Video', y: '2024', sub: 'Documentary · 48min', seed: 6, kind: 'documentary' },
];

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
              {visible.map((w, i) => (
                <div key={`${w.t}-${i}`} className="group flex cursor-pointer flex-col gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                      style={{
                        backgroundImage: `url('${photoFor(w.kind, w.seed + i, { w: 900, h: 700 })}')`,
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
              ))}
            </div>
          </Reveal>
        </section>
      </Shell>
    </PageWrap>
  );
}
