import { Shell, Eyebrow, SecHead, PageWrap } from '../components/ui';
import { photoFor } from '../utils/placeholders';
import { aboutImages, resolveImg } from '../utils/siteImages';


const facts: [string, string][] = [
  ['チーム名', 'Moovit'],
  ['設立', '2026年5月'],
  ['所在地', '東京都港区麻布十番 1-2-3 麻布スタジオ 4F'],
  ['代表', '新家 真二'],
  ['事業内容', '映像制作 / 楽曲制作 / イベント制作 / アーティストの活動支援'],
  ['取引銀行', '三井住友銀行'],
];

export function AboutPage() {
  return (
    <PageWrap>
      <Shell>
        <section className="grid grid-cols-1 items-end gap-16 pb-20 pt-[120px] lg:grid-cols-2 lg:pt-[140px]">
          <div>
            <Eyebrow>About — 会社について</Eyebrow>
            <div className="h-8" />
            <h1 className="font-serif text-hero font-normal text-ink-900">
              つくる人の、
              <br />
              <em className="not-italic text-accent">そばに。</em>
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[15px] leading-[1.8] text-ink-600">
              2018年、東京・中野の小さな部屋から始まりました。アーティストや表現者の "つくりたい"
              に最後まで伴走したい — その願いだけを抱えて、今日まで歩いてきました。
            </p>
            <p className="text-[15px] leading-[1.8] text-ink-600">
              映像、音楽、イベント。手がける領域は広がりましたが、芯は変わっていません。"あなたの声を、聴く"
              こと。それがわたしたちの最初の仕事です。
            </p>
          </div>
        </section>
      </Shell>

      <Shell>
        <div
          className="my-16 aspect-[21/9] w-full overflow-hidden bg-ink-300 bg-cover bg-center"
          style={{ backgroundImage: `url('${resolveImg(aboutImages.studio, photoFor('studio', 0, { w: 2000, h: 900 }))}')` }}
        />
      </Shell>

      <Shell>
        <section className="py-section-tight">
          <SecHead
            eyebrow="Philosophy"
            title={
              <>
                わたしたちの、
                <br />
                三つの約束。
              </>
            }
            right={
              <p className="text-[15px] leading-[1.8] text-ink-600">
                言葉にすると、当たり前のことかもしれません。でも、当たり前のことを当たり前にやりつづけること —
                それがいちばん難しい。
              </p>
            }
          />
          <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-3">
            {[
              {
                n: '01',
                t: '聴くことから、はじめる。',
                d: 'どんな企画も、まずは話を聴くことから。提案は、その後です。あなたの言葉に、まずは静かに耳をかたむけます。',
              },
              {
                n: '02',
                t: '手の届く距離で、つくる。',
                d: 'プロジェクトは、ひとり〜数人の小さなチームで担当します。あなたの想いが、最後まで薄まらずに届くように。',
              },
              {
                n: '03',
                t: '納品の、その先まで。',
                d: '作品は世に出てから、ようやく動きはじめます。届け方、伸ばし方の相談まで、ずっとそばで考えます。',
              },
            ].map((p) => (
              <div key={p.n} className="flex flex-col gap-4">
                <div className="font-mono text-[11px] tracking-[0.2em] text-accent">— {p.n}</div>
                <div className="font-serif text-[28px] leading-[1.2] tracking-[-0.01em] text-ink-900">
                  {p.t}
                </div>
                <div className="text-[14px] leading-[1.75] text-ink-600">{p.d}</div>
              </div>
            ))}
          </div>
        </section>
      </Shell>


      <Shell>
        <dl className="grid grid-cols-1 gap-2 border-t border-ink-200 py-16 lg:grid-cols-[200px_1fr] lg:gap-x-12 lg:gap-y-6">
          {facts.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="pt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                {k}
              </dt>
              <dd className="m-0 border-b border-ink-200 pb-4 text-[15px] text-ink-800 lg:pb-6">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </Shell>
    </PageWrap>
  );
}
