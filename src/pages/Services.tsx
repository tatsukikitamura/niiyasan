import { makePlaceholder } from '../utils/placeholders';

const items = [
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
  },
  {
    n: '02',
    en: 'Sonic',
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
  },
];

export function ServicesPage() {
  return (
    <div className="page">
      <section className="shell pt-[140px] pb-16">
        <span className="eyebrow">Services — できること</span>
        <h1 className="h1 mt-6 max-w-[900px]">
          つくりたいものを、
          <br />
          いちばん近くで、形にする。
        </h1>
      </section>

      {items.map((s) => (
        <section
          key={s.n}
          className="shell border-t border-ink-200"
          style={{ paddingTop: 80, paddingBottom: 80 }}
        >
          <div className="service-page-grid">
            <div>
              <div className="label">— {s.n} / 03</div>
              <h2 className="h2 serif mt-4">
                <em className="italic">{s.en}</em>
                <span className="block font-sans text-[18px] font-medium text-ink-600 mt-2 tracking-[0.04em]">
                  {s.jp}
                </span>
              </h2>
              <p className="lede mt-8 mb-6">{s.lead}</p>
              <p className="body-text max-w-[520px]">{s.desc}</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mt-8 max-w-[480px] list-none p-0">
                {s.list.map((l, i) => (
                  <li
                    key={i}
                    className="font-sans text-[13px] text-ink-700 flex gap-2 items-baseline"
                  >
                    <span className="text-accent font-mono text-[10px]">○</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-ink-200 bg-cover bg-center"
              style={{
                aspectRatio: '4/5',
                backgroundImage: `url('${makePlaceholder(s.seed + 10, { w: 900, h: 1200, label: s.en[0] })}')`,
              }}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
