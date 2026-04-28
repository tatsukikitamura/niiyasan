import { useState, type FormEvent } from 'react';
import { Arrow } from '../components/icons';

type FormState = {
  name: string;
  email: string;
  company: string;
  type: string;
  budget: string;
  detail: string;
};

const TYPES = ['動画制作', '楽曲制作', 'イベント制作', 'その他・複合'];
const BUDGETS = ['〜50万円', '50〜200万円', '200〜500万円', '500万円〜', '相談したい'];

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    type: '動画制作',
    budget: '〜50万円',
    detail: '',
  });
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="page">
      <section className="shell contact-grid">
        <div className="left">
          <span className="eyebrow">Contact — お問い合わせ</span>
          <h1 style={{ marginTop: 24 }}>
            はじめまして。
            <br />
            そして、
            <em className="italic" style={{ color: 'var(--accent)' }}>
              これから。
            </em>
          </h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: 460 }}>
            まずは、思っていることを、ぜんぶ書いてください。
            <br />
            まとまっていなくて、大丈夫です。
          </p>
          <div className="contact-info">
            <div className="row">
              <span className="k">Email</span>
              <span className="v">hello@kaisha-kari.jp</span>
            </div>
            <div className="row">
              <span className="k">Address</span>
              <span className="v">東京都港区麻布十番 1-2-3 4F</span>
            </div>
            <div className="row">
              <span className="k">Hours</span>
              <span className="v">Mon — Fri / 11:00 — 19:00</span>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="field">
            <label>
              お名前 <span className="req">REQUIRED</span>
            </label>
            <input
              type="text"
              placeholder="山田 花子"
              required
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
            />
          </div>
          <div className="field">
            <label>
              メールアドレス <span className="req">REQUIRED</span>
            </label>
            <input
              type="email"
              placeholder="hello@example.com"
              required
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
            />
          </div>
          <div className="field">
            <label>
              所属 / 活動名義 <span style={{ color: 'var(--ink-400)' }}>OPTIONAL</span>
            </label>
            <input
              type="text"
              placeholder="フリーランス、〇〇バンド、など"
              value={form.company}
              onChange={(e) => set('company', e.target.value)}
            />
          </div>
          <div className="field">
            <label>
              ご相談内容 <span className="req">REQUIRED</span>
            </label>
            <div className="radio-group" style={{ marginTop: 8 }}>
              {TYPES.map((t) => (
                <button
                  type="button"
                  key={t}
                  className={`radio-pill ${form.type === t ? 'on' : ''}`}
                  onClick={() => set('type', t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <label>
              ご予算の目安 <span style={{ color: 'var(--ink-400)' }}>OPTIONAL</span>
            </label>
            <div className="radio-group" style={{ marginTop: 8 }}>
              {BUDGETS.map((t) => (
                <button
                  type="button"
                  key={t}
                  className={`radio-pill ${form.budget === t ? 'on' : ''}`}
                  onClick={() => set('budget', t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <label>
              くわしく <span className="req">REQUIRED</span>
            </label>
            <textarea
              placeholder="つくりたいもの、伝えたいこと、なんでも。"
              required
              value={form.detail}
              onChange={(e) => set('detail', e.target.value)}
            />
          </div>
          <div className="form-submit">
            <p className="note">
              通常、3営業日以内にお返事します。お急ぎの場合はメールに [URGENT] とお書きください。
            </p>
            <button type="submit" className="btn btn-primary">
              {sent ? 'ありがとうございます ✓' : '送信する'} {!sent && <Arrow />}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
