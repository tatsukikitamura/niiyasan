import { Arrow, ArrowDiag } from '../components/icons';
import { Reveal } from '../components/Reveal';
import { makePlaceholder } from '../utils/placeholders';
import type { PageProps } from '../types';

export function HomePage({ setPage }: PageProps) {
  const featured = [
    { t: '悠針れい / チノカテ MV', cat: 'Music Video', span: 7, seed: 1 },
    { t: 'Mermaid Live 2026', cat: 'Event', span: 5, seed: 2 },
    { t: 'Sleeping Garden — EP', cat: 'Music', span: 4, seed: 3 },
    { t: 'Tokyo Sound Walk', cat: 'Documentary', span: 8, seed: 4 },
  ];
  const services = [
    {
      n: '01',
      en: 'Visual',
      jp: '動画制作',
      desc: 'ミュージックビデオ、ドキュメンタリー、ライブ収録。映像のすべてを、構想から納品まで一貫してサポートします。',
      tags: ['MV', 'Documentary', 'Live', 'CM'],
    },
    {
      n: '02',
      en: 'Sonic',
      jp: '楽曲制作',
      desc: '作曲・編曲・録音・ミックス。アーティストの声に寄り添い、世界観を音で立ち上げます。',
      tags: ['Compose', 'Arrange', 'Mix', 'Master'],
    },
    {
      n: '03',
      en: 'Stage',
      jp: 'イベント制作',
      desc: 'ライブ、リリースパーティ、ポップアップ。空間と時間をデザインし、忘れられない夜をつくります。',
      tags: ['Live', 'Party', 'Popup', 'Tour'],
    },
  ];

  const go = (p: 'works' | 'contact' | 'services' | 'blog') => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <div className="page">
      <section className="shell pt-40 pb-20 relative">
        <div className="flex justify-between items-end gap-8 mb-12 flex-wrap">
          <div className="eyebrow">Tokyo · Est. 2018</div>
          <div className="label">Issue 026 — Spring 2026</div>
        </div>
        <h1>
          <span className="block font-mono text-[11px] tracking-[0.2em] text-ink-400 mb-6">
            — 表現を、ともに。
          </span>
          <div className="hero-title">
            <span className="row">
              <span>音と映像で、</span>
            </span>
            <span className="row">
              <span>
                <em>記憶</em>に残る
              </span>
            </span>
            <span className="row">
              <span>体験をつくる。</span>
            </span>
          </div>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-16 border-t border-ink-200 mt-16">
          <div className="lede max-w-[480px]">
            アーティスト、クリエイター、表現者のみなさんへ。
            <br />
            映像・楽曲・イベント — つくりたいものは違っても、
            <br />
            届けたい景色は、いつもひとつです。
          </div>
          <div className="flex gap-3 md:justify-self-end flex-wrap">
            <a className="btn btn-primary" onClick={() => go('contact')}>
              Start a project <Arrow />
            </a>
            <a className="btn btn-ghost" onClick={() => go('works')}>
              See works <Arrow />
            </a>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div className="it" key={k}>
              <span className="serif">
                <em>Music Video</em>
              </span>
              <span className="dot" />
              <span className="serif">Live Production</span>
              <span className="dot" />
              <span className="serif">
                <em>Composition</em>
              </span>
              <span className="dot" />
              <span className="serif">Sound Design</span>
              <span className="dot" />
              <span className="serif">
                <em>Stage</em>
              </span>
              <span className="dot" />
              <span className="serif">Documentary</span>
              <span className="dot" />
            </div>
          ))}
        </div>
      </div>

      <section className="section shell">
        <div className="sec-head">
          <div className="left">
            <span className="eyebrow">Selected Works · 2025—26</span>
            <h2 className="h1">最近のしごと。</h2>
          </div>
          <div className="right body-text">
            アーティストの想いに耳を澄ませ、ひとつひとつ丁寧につくってきました。すべての仕事に、わたしたちなりの "誠実さ"
            を込めて。
          </div>
        </div>
        <Reveal>
          <div className="featured">
            {featured.map((f, i) => (
              <div key={i} className={`feat-card span-${f.span}`} onClick={() => go('works')}>
                <div
                  className="img"
                  style={{
                    backgroundImage: `url('${makePlaceholder(f.seed, { w: 1200, h: 800, label: f.t[0] })}')`,
                  }}
                />
                <div className="overlay" />
                <div className="meta">
                  <div className="t">{f.t}</div>
                  <div className="cat">{f.cat}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-tight shell">
        <div className="sec-head">
          <div className="left">
            <span className="eyebrow">What we do</span>
            <h2 className="h1">
              三つの場所で、
              <br />
              表現を支える。
            </h2>
          </div>
          <div className="right body-text">
            映像、音楽、イベント。それぞれ独立した領域でありながら、わたしたちの中ではすべてが地続きです。"つくる"
            を一気通貫で支えられること、それがわたしたちの強み。
          </div>
        </div>
      </section>
      <div className="shell">
        <div className="services">
          {services.map((s) => (
            <div className="service" key={s.n} onClick={() => go('services')}>
              <div className="svc-num">— {s.n} / 03</div>
              <div className="svc-arrow">
                <ArrowDiag />
              </div>
              <div className="svc-title">
                <em className="italic">{s.en}</em>
                <span className="jp">{s.jp}</span>
              </div>
              <div className="svc-desc">{s.desc}</div>
              <div className="svc-tags">
                {s.tags.map((t, i) => (
                  <span key={i} className="svc-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="section shell">
        <div className="numbers">
          <div className="n">
            <div className="v">
              142<sup>+</sup>
            </div>
            <div className="l">Projects delivered</div>
          </div>
          <div className="n">
            <div className="v">38</div>
            <div className="l">Artists collaborated</div>
          </div>
          <div className="n">
            <div className="v">
              7<sup>yr</sup>
            </div>
            <div className="l">Years in motion</div>
          </div>
          <div className="n">
            <div className="v">∞</div>
            <div className="l">Stories ahead</div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sec-head">
          <div className="left">
            <span className="eyebrow">Journal</span>
            <h2 className="h1">最新の記録。</h2>
          </div>
          <div className="right body-text flex items-end justify-end">
            <a className="btn btn-ghost" onClick={() => go('blog')}>
              All entries <Arrow />
            </a>
          </div>
        </div>
        <div className="blog-list">
          {[
            { d: '2026.04.18', c: 'News', t: '新しいスタジオ、麻布十番にオープンしました。' },
            { d: '2026.03.30', c: 'Interview', t: 'アーティスト悠針れいと話した、夜の音について。' },
            { d: '2026.03.10', c: 'Notes', t: 'ミックスダウンで意識している、たった三つのこと。' },
          ].map((p, i) => (
            <div key={i} className="post" onClick={() => go('blog')}>
              <div className="post-date">{p.d}</div>
              <div className="post-cat">{p.c}</div>
              <div className="post-ttl">{p.t}</div>
              <div className="post-arr">↗</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
