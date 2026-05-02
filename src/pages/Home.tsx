import { ArrowDiag } from '../components/icons';
import { Reveal } from '../components/Reveal';
import { Shell, Eyebrow, Label, SecHead, Btn, PageWrap } from '../components/ui';
import { photoFor, type PhotoKind } from '../utils/placeholders';
import type { PageProps } from '../types';

export function HomePage({ setPage }: PageProps) {
  const featured: { t: string; cat: string; span: number; seed: number; kind: PhotoKind }[] = [
    { t: '悠針れい / チノカテ MV', cat: 'Music Video', span: 7, seed: 1, kind: 'music-video' },
    { t: 'Mermaid Live 2026', cat: 'Event', span: 5, seed: 2, kind: 'live' },
    { t: 'Sleeping Garden — EP', cat: 'Music', span: 4, seed: 3, kind: 'music' },
    { t: 'Tokyo Sound Walk', cat: 'Documentary', span: 8, seed: 4, kind: 'documentary' },
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
      en: 'Music',
      jp: '楽曲制作',
      desc: '作曲・編曲・録音・ミックス。アーティストの声に寄り添い、世界観を音で立ち上げます。',
      tags: ['Compose', 'Arrange', 'Mix', 'Master'],
    },
    {
      n: '03',
      en: 'Stage',
      jp: 'イベント制作',
      desc: '一瞬の熱狂を、一生の記憶に。ライブ、リリースパーティー、ポップアップ。私たちがデザインするのは、単なる場所ではなく、そこで生まれる「忘れられない体験」そのものです。',
      tags: ['Live', 'Party', 'Popup', 'Tour'],
    },
  ];

  const go = (p: 'works' | 'contact' | 'services' | 'blog') => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <PageWrap>
      <Shell className="relative pb-16 pt-28">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-8">
          <Eyebrow>Tokyo · Est. 2018</Eyebrow>
          <Label>Issue 026 — Spring 2026</Label>
        </div>

        <h1>
          <div className="font-serif text-hero font-normal text-ink-900">
            <span className="block overflow-hidden pt-[0.12em]">
              <span className="inline-block animate-rise">音と映像で、</span>
            </span>
            <span className="block overflow-hidden pt-[0.12em]">
              <span className="inline-block animate-rise [animation-delay:0.15s]">
                <em className="not-italic text-accent">記憶</em>を。
              </span>
            </span>
          </div>
        </h1>

        <div className="mt-12 grid grid-cols-1 items-end gap-8 border-t border-ink-200 pt-10 md:grid-cols-2">
          <div className="max-w-[480px] font-serif text-lede text-ink-700">
            アーティスト、クリエイター、表現者のみなさんへ。
            <br />
            映像・楽曲・イベント — つくりたいものは違っても、
            <br />
            届けたい景色は、いつもひとつです。
          </div>
          <div className="flex flex-wrap gap-3 md:justify-self-end">
            <Btn variant="primary" onClick={() => go('contact')}>
              Start a project
            </Btn>
            <Btn variant="ghost" onClick={() => go('works')}>
              See works
            </Btn>
          </div>
        </div>
      </Shell>

      <div className="overflow-hidden border-y border-ink-200 bg-ink-50 py-6">
        <div className="flex animate-marquee gap-16 whitespace-nowrap font-serif text-marquee text-ink-800">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center gap-16">
              <span className="font-serif">
                <em className="not-italic">Music Video</em>
              </span>
              <Dot />
              <span className="font-serif">Live Production</span>
              <Dot />
              <span className="font-serif">
                <em className="not-italic">Composition</em>
              </span>
              <Dot />
              <span className="font-serif">楽曲制作</span>
              <Dot />
              <span className="font-serif">
                <em className="not-italic">Stage</em>
              </span>
              <Dot />
              <span className="font-serif">映像制作</span>
              <Dot />
            </div>
          ))}
        </div>
      </div>

      <Shell>
        <section className="py-section">
          <SecHead
            eyebrow="Selected Works · 2025—26"
            title="最近のしごと。"
            right={
              <p className="text-[15px] leading-[1.8] text-ink-600">
                アーティストの想いに耳を澄ませ、ひとつひとつ丁寧につくってきました。すべての仕事に、わたしたちなりの "誠実さ"
                を込めて。
              </p>
            }
          />
          <Reveal>
            <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {featured.map((f, i) => (
                <FeatCard key={i} f={f} onClick={() => go('works')} />
              ))}
            </div>
          </Reveal>
        </section>
      </Shell>

      <Shell>
        <section className="py-section-tight">
          <SecHead
            eyebrow="What we do"
            title={
              <>
                三つの場所で、
                <br />
                表現を支える。
              </>
            }
            right={
              <p className="text-[15px] leading-[1.8] text-ink-600">
                映像、音楽、イベント。それぞれ独立した領域でありながら、わたしたちの中ではすべてが地続きです。"つくる"
                を一気通貫で支えられること、それがわたしたちの強み。
              </p>
            }
          />
        </section>
      </Shell>

      <Shell>
        <div className="grid grid-cols-1 border-t border-ink-200 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.n}
              onClick={() => go('services')}
              className="group relative flex min-h-[380px] cursor-pointer flex-col gap-6 border-b border-ink-200 p-8 transition-colors duration-[400ms] hover:bg-ink-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:p-12"
            >
              <div className="font-mono text-[11px] tracking-[0.2em] text-ink-400 transition-colors duration-300 group-hover:text-accent">
                — {s.n} / 03
              </div>
              <div className="absolute right-8 top-12 flex h-7 w-7 items-center justify-center rounded-full border border-ink-300 transition-all duration-300 group-hover:-rotate-45 group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-ink-50">
                <ArrowDiag />
              </div>
              <div className="font-serif text-svc-title text-ink-900">
                <em className="not-italic">{s.en}</em>
                <span className="mt-2 block font-sans text-[14px] font-medium tracking-[0.04em] text-ink-600">
                  {s.jp}
                </span>
              </div>
              <div className="text-[14px] leading-[1.75] text-ink-600">{s.desc}</div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {s.tags.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-ink-300 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Shell>

      <Shell>
        <section className="py-section">
          <div className="grid grid-cols-2 gap-8 border-y border-ink-200 py-12 lg:grid-cols-4">
            <NumberItem v={<>142<Sup>+</Sup></>} l="Projects delivered" />
            <NumberItem v="38" l="Artists collaborated" />
            <NumberItem v={<>7<Sup>yr</Sup></>} l="Years in motion" />
            <NumberItem v="∞" l="Stories ahead" />
          </div>
        </section>
      </Shell>

      <Shell>
        <section className="py-section">
          <SecHead
            eyebrow="Journal"
            title="最新の記録。"
            right={
              <div className="flex items-end justify-end">
                <Btn variant="ghost" onClick={() => go('blog')}>
                  All entries
                </Btn>
              </div>
            }
          />
          <div className="pt-12">
            {[
              { d: '2026.04.18', c: 'News', t: '新しいスタジオ、麻布十番にオープンしました。' },
              { d: '2026.03.30', c: 'Interview', t: 'アーティスト悠針れいと話した、夜の音について。' },
              { d: '2026.03.10', c: 'Notes', t: 'ミックスダウンで意識している、たった三つのこと。' },
            ].map((p, i) => (
              <Post key={i} d={p.d} c={p.c} t={p.t} onClick={() => go('blog')} />
            ))}
          </div>
        </section>
      </Shell>
    </PageWrap>
  );
}

function Dot() {
  return (
    <span className="mx-8 inline-block h-2 w-2 shrink-0 self-center rounded-full bg-accent" />
  );
}

type FeatCardData = { t: string; cat: string; span: number; seed: number; kind: PhotoKind };

function FeatCard({ f, onClick }: { f: FeatCardData; onClick: () => void }) {
  const span = f.span as 7 | 5 | 4 | 8;
  const spanCls = {
    7: 'lg:col-span-7 aspect-[16/10]',
    5: 'lg:col-span-5 aspect-[16/10] lg:aspect-[4/4.6]',
    4: 'lg:col-span-4 aspect-[16/10] lg:aspect-[4/3]',
    8: 'lg:col-span-8 aspect-[16/10] lg:aspect-[16/9]',
  }[span];

  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden bg-ink-200 ${spanCls}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-800 ease-smooth group-hover:scale-[1.04]"
        style={{
          backgroundImage: `url('${photoFor(f.kind, f.seed, { w: 1200, h: 800 })}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[rgba(14,13,12,0.7)]" />
      <div className="absolute inset-x-6 bottom-[22px] flex items-end justify-between gap-4 text-ink-50">
        <div className="font-serif text-feat-title">{f.t}</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-85">{f.cat}</div>
      </div>
    </div>
  );
}

function NumberItem({ v, l }: { v: React.ReactNode; l: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-serif text-numbers-v leading-none text-ink-900">{v}</div>
      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">{l}</div>
    </div>
  );
}

function Sup({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-1 inline-block translate-y-[-0.6em] font-mono text-[0.22em] uppercase tracking-[0.08em] text-accent">
      {children}
    </span>
  );
}

function Post({ d, c, t, onClick }: { d: string; c: string; t: string; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group grid cursor-pointer grid-cols-1 items-center gap-8 border-b border-ink-200 py-6 transition-[padding] duration-300 hover:pl-3 lg:grid-cols-[110px_200px_1fr_100px]"
    >
      <div className="font-mono text-[12px] tracking-[0.04em] text-ink-500">{d}</div>
      <div className="w-fit rounded-full border border-ink-300 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-700">
        {c}
      </div>
      <div className="font-serif text-[19px] leading-[1.35] tracking-[-0.005em] text-ink-900">
        {t}
      </div>
      <div className="font-mono text-[14px] text-ink-500 transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent lg:justify-self-end">
        ↗
      </div>
    </div>
  );
}
