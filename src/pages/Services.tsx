import { Shell, Eyebrow, Label, PageWrap } from '../components/ui';
import { photoFor, type PhotoKind } from '../utils/placeholders';
import { servicesImages, resolveImg } from '../utils/siteImages';

const items: {
  n: string;
  en: string;
  jp: string;
  lead: string;
  desc: string;
  list: string[];
  seed: number;
  kind: PhotoKind;
}[] = [
  {
    n: '01',
    en: 'Visual',
    jp: '動画制作',
    lead: '音楽のために、街のために、人のために。映像を、てづくりで。',
    desc: 'ミュージックビデオから、ドキュメンタリー、ライブ収録、ショートフィルムまで。企画・撮影・編集・カラーグレーディングまで、すべて社内で完結させます。少人数だからこそ、ディテールまで目が行き届きます。',
    list: [
      'ミュージックビデオ',
      'ライブ収録 / 配信',
      'ドキュメンタリー',
      'アーティストプロモ',
      'コンセプト映像',
      'CM / ブランドフィルム',
    ],
    seed: 1,
    kind: 'music-video',
  },
  {
    n: '02',
    en: 'Music',
    jp: '楽曲制作',
    lead: '声に寄り添い、世界観を、音で立ち上げる。',
    desc: '作曲・編曲・レコーディング・ミックス・マスタリングまで、音楽制作の全工程に対応します。シンガーソングライター、バンド、トラックメイカー — それぞれの個性を、いちばん輝く形でパッケージします。',
    list: [
      '作曲 / 編曲',
      'レコーディング',
      'ミックスダウン',
      'マスタリング',
      'サウンドデザイン',
      'BGM / ジングル制作',
    ],
    seed: 2,
    kind: 'music',
  },
  {
    n: '03',
    en: 'Stage',
    jp: 'イベント制作',
    lead: '夜の空気ごと、つくる。ライブ、リリパ、ポップアップ。',
    desc: 'ライブ、リリースパーティ、ポップアップストア、展示。会場選定から舞台演出、音響、照明、配信まで、ひとつの世界観として組み立てます。終わったあとも、誰かの記憶に残る時間を。',
    list: [
      'ライブ / ツアー',
      'リリースパーティ',
      'ポップアップストア',
      '展示 / 個展',
      '舞台演出 / 音響照明',
      'アフターレポート / アーカイブ',
    ],
    seed: 3,
    kind: 'live',
  },
];

export function ServicesPage() {
  return (
    <PageWrap>
      <Shell>
        <section className="pb-16 pt-[120px] lg:pt-[140px]">
          <Eyebrow>Services — できること</Eyebrow>
          <h1 className="mt-6 max-w-[900px] font-serif text-hero font-normal text-ink-900">
            つくりたいを、
            <br />
            <em className="not-italic text-accent">形に。</em>
          </h1>
        </section>
      </Shell>

      {items.map((s, i) => (
        <Shell key={s.n}>
          <section className="grid grid-cols-1 gap-16 border-t border-ink-200 py-20 lg:grid-cols-2">
            <div>
              <Label>— {s.n} / 03</Label>
              <h2 className="mt-4 font-serif text-h2 font-normal text-ink-900">
                <em className="not-italic">{s.en}</em>
                <span className="mt-2 block font-sans text-[18px] font-medium tracking-[0.04em] text-ink-600">
                  {s.jp}
                </span>
              </h2>
              <p className="mb-6 mt-8 font-serif text-lede text-ink-700">{s.lead}</p>
              <p className="max-w-[520px] text-[15px] leading-[1.8] text-ink-600">{s.desc}</p>
              <ul className="mt-8 grid max-w-[480px] list-none grid-cols-2 gap-x-6 gap-y-3 p-0">
                {s.list.map((l, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-2 font-sans text-[13px] text-ink-700"
                  >
                    <span className="font-mono text-[10px] text-accent">○</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="aspect-[4/5] bg-ink-200 bg-cover bg-center"
              style={{
                backgroundImage: `url('${resolveImg(servicesImages[i] ?? '', photoFor(s.kind, s.seed + 2, { w: 900, h: 1200 }))}')`,
              }}
            />
          </section>
        </Shell>
      ))}
    </PageWrap>
  );
}
