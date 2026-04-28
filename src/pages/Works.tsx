import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { makePlaceholder } from '../utils/placeholders';

type Cat = 'All' | 'Video' | 'Music' | 'Event';

const cats: Cat[] = ['All', 'Video', 'Music', 'Event'];

const works: { t: string; c: Exclude<Cat, 'All'>; y: string; sub: string; seed: number }[] = [
  { t: '悠針れい / チノカテ', c: 'Video', y: '2026', sub: 'Music Video · 4K', seed: 1 },
  { t: 'Sleeping Garden — EP', c: 'Music', y: '2026', sub: 'Compose · Mix · Master', seed: 2 },
  {
    t: 'Mermaid Live 2026',
    c: 'Event',
    y: '2026',
    sub: 'Live Show · Tokyo Garden Theater',
    seed: 3,
  },
  { t: 'Quiet River', c: 'Music', y: '2025', sub: 'Original Score', seed: 4 },
  { t: 'Tokyo Sound Walk', c: 'Video', y: '2025', sub: 'Documentary · 24min', seed: 5 },
  {
    t: '藤川 結衣 — 個展「白の空気」',
    c: 'Event',
    y: '2025',
    sub: 'Exhibition Production',
    seed: 6,
  },
  { t: '夜想曲 / Nocturne', c: 'Video', y: '2025', sub: 'Music Video', seed: 1 },
  {
    t: 'haru — 1st Single「ここから」',
    c: 'Music',
    y: '2025',
    sub: 'Produce · Arrangement',
    seed: 2,
  },
  { t: 'MIDNIGHT POPUP', c: 'Event', y: '2025', sub: 'Pop-up Store · Daikanyama', seed: 3 },
  {
    t: '石川 茉莉 — Tour 2025',
    c: 'Event',
    y: '2025',
    sub: 'Tour Production · 6 cities',
    seed: 4,
  },
  {
    t: 'Field Recordings vol.1',
    c: 'Music',
    y: '2024',
    sub: 'Sound Design · Compilation',
    seed: 5,
  },
  { t: 'Documentary: 街を編む人', c: 'Video', y: '2024', sub: 'Documentary · 48min', seed: 6 },
];

export function WorksPage() {
  const [active, setActive] = useState<Cat>('All');
  const visible = active === 'All' ? works : works.filter((w) => w.c === active);

  return (
    <div className="page">
      <section className="shell pt-[140px] pb-12">
        <div className="sec-head" style={{ marginBottom: 32 }}>
          <div className="left">
            <span className="eyebrow">Works — 今までの実績</span>
            <h1 className="h1">記録の、いち部分。</h1>
          </div>
          <div className="right body-text">
            アーティストや個人の方との仕事を中心に、ご紹介できるものだけ載せています。NDA等で公開できないものも、たくさんあります。
          </div>
        </div>
        <div className="work-filters">
          {cats.map((c) => (
            <button
              key={c}
              className={`work-filter ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <Reveal>
          <div className="works-grid">
            {visible.map((w, i) => (
              <div className="work-item" key={`${w.t}-${i}`}>
                <div className="thumb">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url('${makePlaceholder(w.seed + i, { w: 900, h: 700, label: w.t[0] })}')`,
                    }}
                  />
                  <div className="badge">{w.c}</div>
                </div>
                <div className="info">
                  <div className="ttl">{w.t}</div>
                  <div className="yr">{w.y}</div>
                </div>
                <div className="info-sub">{w.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
