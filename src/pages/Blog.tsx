import { Arrow } from '../components/icons';
import { makePlaceholder } from '../utils/placeholders';

const featured = {
  d: '2026.04.18',
  c: 'News',
  t: '新しいスタジオを、麻布十番にオープンしました。',
  e: '2018年、中野の小さな部屋から始まったわたしたちの仕事は、いま、麻布十番の新しい場所へと移ります。広くなったわけではありません。ただ、もう少しだけ、よい音で録れる部屋ができました。',
  seed: 9,
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
    <div className="page">
      <section className="shell blog-hero">
        <span className="eyebrow">Journal — お知らせ・日々の記録</span>
        <h1 style={{ marginTop: 24 }}>かきとめる。</h1>
        <p className="lede" style={{ marginTop: 24, maxWidth: 640 }}>
          仕事のニュース、現場の覚え書き、アーティストとの会話。
          <br />
          あなたが知る前に、わたしたちが忘れてしまわないように。
        </p>
      </section>

      <section className="shell">
        <div className="blog-feature">
          <div className="img-wrap">
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url('${makePlaceholder(featured.seed, { w: 1400, h: 900 })}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div>
            <div className="label-row">
              <span className="label" style={{ color: 'var(--accent)' }}>
                Featured
              </span>
              <span className="post-date">{featured.d}</span>
              <span className="post-cat" style={{ padding: '4px 10px' }}>
                {featured.c}
              </span>
            </div>
            <div className="ttl">{featured.t}</div>
            <p className="ex">{featured.e}</p>
            <a className="btn btn-ghost">
              Read more <Arrow />
            </a>
          </div>
        </div>

        <div className="blog-list">
          {posts.map((p, i) => (
            <div key={i} className="post">
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
