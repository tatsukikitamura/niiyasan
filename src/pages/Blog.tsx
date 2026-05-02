import { Shell, Eyebrow, Btn, PageWrap } from '../components/ui';
import { photoFor, type PhotoKind } from '../utils/placeholders';
import { blogImages, resolveImg } from '../utils/siteImages';

const featured: {
  d: string;
  c: string;
  t: string;
  e: string;
  seed: number;
  kind: PhotoKind;
} = {
  d: '2026.05.2',
  c: 'News',
  t: 'HPを開設しました。',
  e: '私達のビジョンをお届けする新たな箱(スペース)です。',
  seed: 1,
  kind: 'studio',
};

const posts = [
  { d: '2026.03.30', c: 'Interview', t: 'アーティスト悠針れいと話した、夜の音について。' },
  { d: '2026.03.10', c: 'Notes', t: 'ミックスダウンで意識している、たった三つのこと。' },
  { d: '2026.02.22', c: 'News', t: 'Sleeping Garden のEPが、4月に発売になります。' },
  { d: '2026.02.04', c: 'Diary', t: '雪の朝、撮影が中止になった日のこと。' },
  { d: '2026.01.18', c: 'Interview', t: 'haru さんの一曲ができるまで、6ヶ月の記録。' },
  { d: '2025.12.27', c: 'Notes', t: 'イベント当日、開演30分前にやっていること。' },
  { d: '2025.12.05', c: 'News', t: 'Mermaid Live 2026、チケット販売をスタート。' },
  { d: '2025.11.18', c: 'Diary', t: '新しいマイクを、ひとつだけ買いました。' },
];

export function BlogPage() {
  return (
    <PageWrap>
      <Shell>
        <section className="pb-16 pt-[120px] lg:pt-[140px]">
          <Eyebrow>Journal — お知らせ・日々の記録</Eyebrow>
          <h1 className="mt-6 font-serif text-hero font-normal text-ink-900">
            かきとめる。
          </h1>
          <p className="mt-6 max-w-[640px] font-serif text-lede text-ink-700">
            仕事のニュース、現場の覚え書き、アーティストとの会話。
            <br />
            あなたが知る前に、わたしたちが忘れてしまわないように。
          </p>
        </section>
      </Shell>

      <Shell>
        <div className="grid grid-cols-1 items-center gap-12 border-y border-ink-200 py-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="aspect-[16/10] overflow-hidden bg-ink-300">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${resolveImg(blogImages.featured, photoFor(featured.kind, featured.seed, { w: 1400, h: 900 }))}')`,
              }}
            />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Featured
              </span>
              <span className="font-mono text-[12px] tracking-[0.04em] text-ink-500">
                {featured.d}
              </span>
              <span className="rounded-full border border-ink-300 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-700">
                {featured.c}
              </span>
            </div>
            <div className="mb-4 font-serif text-blog-feature text-ink-900">{featured.t}</div>
            <p className="mb-6 text-[15px] leading-[1.75] text-ink-600">{featured.e}</p>
            <Btn variant="ghost">Read more</Btn>
          </div>
        </div>

        <div className="pt-12">
          {posts.map((p, i) => (
            <div
              key={i}
              className="group grid cursor-pointer grid-cols-1 items-center gap-2 border-b border-ink-200 py-6 transition-[padding] duration-300 hover:pl-3 lg:grid-cols-[110px_200px_1fr_100px] lg:gap-8"
            >
              <div className="font-mono text-[12px] tracking-[0.04em] text-ink-500">{p.d}</div>
              <div className="w-fit rounded-full border border-ink-300 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-700">
                {p.c}
              </div>
              <div className="font-serif text-[19px] leading-[1.35] tracking-[-0.005em] text-ink-900">
                {p.t}
              </div>
              <div className="font-mono text-[14px] text-ink-500 transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent lg:justify-self-end">
                ↗
              </div>
            </div>
          ))}
        </div>
      </Shell>
    </PageWrap>
  );
}
