import { makePlaceholder, makePersonPh } from '../utils/placeholders';

export function AboutPage() {
  return (
    <div className="page">
      <section className="shell about-hero">
        <div className="left">
          <span className="eyebrow">About — 会社について</span>
          <div style={{ height: 32 }} />
          <h1 className="quote">
            つくる人の <em>そばに、</em>
            <br />
            ずっと、いる。
          </h1>
        </div>
        <div className="right">
          <p className="body-text">
            2018年、東京・中野の小さな部屋から始まりました。アーティストや表現者の "つくりたい"
            に最後まで伴走したい — その願いだけを抱えて、今日まで歩いてきました。
          </p>
          <p className="body-text">
            映像、音楽、イベント。手がける領域は広がりましたが、芯は変わっていません。"あなたの声を、聴く"
            こと。それがわたしたちの最初の仕事です。
          </p>
        </div>
      </section>

      <div className="shell">
        <div
          className="about-image"
          style={{ backgroundImage: `url('${makePlaceholder(7, { w: 2000, h: 900 })}')` }}
        />
      </div>

      <section className="shell section-tight">
        <div className="sec-head">
          <div className="left">
            <span className="eyebrow">Philosophy</span>
            <h2 className="h1">
              わたしたちの、
              <br />
              三つの約束。
            </h2>
          </div>
          <div className="right body-text">
            言葉にすると、当たり前のことかもしれません。でも、当たり前のことを当たり前にやりつづけること —
            それがいちばん難しい。
          </div>
        </div>
        <div className="philosophy">
          <div className="item">
            <div className="pn">— 01</div>
            <div className="pt">聴くことから、はじめる。</div>
            <div className="pd">
              どんな企画も、まずは話を聴くことから。提案は、その後です。あなたの言葉に、まずは静かに耳をかたむけます。
            </div>
          </div>
          <div className="item">
            <div className="pn">— 02</div>
            <div className="pt">手の届く距離で、つくる。</div>
            <div className="pd">
              プロジェクトは、ひとり〜数人の小さなチームで担当します。あなたの想いが、最後まで薄まらずに届くように。
            </div>
          </div>
          <div className="item">
            <div className="pn">— 03</div>
            <div className="pt">納品の、その先まで。</div>
            <div className="pd">
              作品は世に出てから、ようやく動きはじめます。届け方、伸ばし方の相談まで、ずっとそばで考えます。
            </div>
          </div>
        </div>
      </section>

      <section className="shell section-tight">
        <div className="sec-head">
          <div className="left">
            <span className="eyebrow">Members</span>
            <h2 className="h1">小さな、よいチーム。</h2>
          </div>
          <div className="right body-text">少数精鋭。ひとり、ひとりが、表現者でもあります。</div>
        </div>
        <div className="team">
          {[
            {
              n: '新谷 茉莉子',
              en: 'Mariko Shintani',
              r: 'Founder / Director',
              b: '音楽レーベルでのA&Rを経て、2018年に会社を設立。映像と音楽の境界を曖昧にすることに興味があります。',
            },
            {
              n: '石田 慶',
              en: 'Kei Ishida',
              r: 'Composer / Producer',
              b: 'クラシック作曲科出身。ポップスからアンビエントまで幅広く。最近はモジュラーシンセに夢中。',
            },
            {
              n: '村瀬 拓海',
              en: 'Takumi Murase',
              r: 'Filmmaker',
              b: 'ドキュメンタリー出身。手のひらに収まる物語を、フィルムで残すのが好きです。',
            },
            {
              n: '藤田 結衣',
              en: 'Yui Fujita',
              r: 'Producer / PM',
              b: '現場と数字、両方をやさしく見守るタイプ。アーティストのいちばん近くにいる人。',
            },
          ].map((m, i) => (
            <div className="member" key={i}>
              <div className="ph" style={{ backgroundImage: `url('${makePersonPh(i + 1)}')` }} />
              <div>
                <div className="nm">
                  {m.n}
                  <span className="en">{m.en}</span>
                </div>
                <div className="ro">{m.r}</div>
                <div className="bio">{m.b}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell">
        <dl className="facts">
          <dt>会社名</dt>
          <dd>会社名(仮) / Company Name TBD Inc.</dd>
          <dt>設立</dt>
          <dd>2018年4月</dd>
          <dt>所在地</dt>
          <dd>東京都港区麻布十番 1-2-3 麻布スタジオ 4F</dd>
          <dt>代表</dt>
          <dd>新谷 茉莉子</dd>
          <dt>事業内容</dt>
          <dd>映像制作 / 楽曲制作 / イベント制作 / アーティストの活動支援</dd>
          <dt>取引銀行</dt>
          <dd>三井住友銀行 / 楽天銀行</dd>
        </dl>
      </section>
    </div>
  );
}
