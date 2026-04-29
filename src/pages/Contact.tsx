import { useState, type FormEvent, type ReactNode } from 'react';
import { Shell, Eyebrow, Btn, PageWrap } from '../components/ui';

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
    <PageWrap>
      <Shell>
        <section className="grid grid-cols-1 gap-16 pb-16 pt-[120px] lg:grid-cols-[1fr_1.3fr] lg:pt-[140px]">
          <div>
            <Eyebrow>Contact — お問い合わせ</Eyebrow>
            <h1 className="mt-6 font-serif text-hero font-normal text-ink-900">
              <em className="not-italic text-accent">はじめまして。</em>
            </h1>
            <p className="mt-6 max-w-[460px] font-serif text-lede text-ink-700">
              まずは、思っていることを、ぜんぶ書いてください。
              <br />
              まとまっていなくて、大丈夫です。
            </p>
            <div className="mt-12 flex flex-col gap-6 border-t border-ink-200 pt-12">
              <InfoRow k="Email" v="hello@kaisha-kari.jp" />
              <InfoRow k="Address" v="東京都港区麻布十番 1-2-3 4F" />
              <InfoRow k="Hours" v="Mon — Fri / 11:00 — 19:00" />
            </div>
          </div>

          <form className="flex flex-col" onSubmit={submit}>
            <Field label="お名前" required>
              <input
                type="text"
                placeholder="山田 花子"
                required
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                className="w-full border-0 bg-transparent p-0 py-1 font-serif text-[22px] tracking-[-0.005em] text-ink-900 outline-none placeholder:text-ink-300"
              />
            </Field>
            <Field label="メールアドレス" required>
              <input
                type="email"
                placeholder="hello@example.com"
                required
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                className="w-full border-0 bg-transparent p-0 py-1 font-serif text-[22px] tracking-[-0.005em] text-ink-900 outline-none placeholder:text-ink-300"
              />
            </Field>
            <Field label="所属 / 活動名義" optional>
              <input
                type="text"
                placeholder="フリーランス、〇〇バンド、など"
                value={form.company}
                onChange={(e) => set('company', e.target.value)}
                className="w-full border-0 bg-transparent p-0 py-1 font-serif text-[22px] tracking-[-0.005em] text-ink-900 outline-none placeholder:text-ink-300"
              />
            </Field>
            <Field label="ご相談内容" required>
              <div className="mt-2 flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <Pill key={t} on={form.type === t} onClick={() => set('type', t)}>
                    {t}
                  </Pill>
                ))}
              </div>
            </Field>
            <Field label="ご予算の目安" optional>
              <div className="mt-2 flex flex-wrap gap-2">
                {BUDGETS.map((t) => (
                  <Pill key={t} on={form.budget === t} onClick={() => set('budget', t)}>
                    {t}
                  </Pill>
                ))}
              </div>
            </Field>
            <Field label="くわしく" required>
              <textarea
                placeholder="つくりたいもの、伝えたいこと、なんでも。"
                required
                value={form.detail}
                onChange={(e) => set('detail', e.target.value)}
                className="min-h-[100px] w-full resize-y border-0 bg-transparent p-0 py-1 font-sans text-[15px] leading-[1.7] text-ink-900 outline-none placeholder:text-ink-300"
              />
            </Field>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              <p className="max-w-[320px] text-[12px] text-ink-500">
                通常、3営業日以内にお返事します。お急ぎの場合はメールに [URGENT] とお書きください。
              </p>
              <Btn variant="primary" as="button" type="submit" withArrow={!sent}>
                {sent ? 'ありがとうございます ✓' : '送信する'}
              </Btn>
            </div>
          </form>
        </section>
      </Shell>
    </PageWrap>
  );
}

function InfoRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">{k}</span>
      <span className="font-serif text-[22px] tracking-[-0.005em]">{v}</span>
    </div>
  );
}

function Field({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 border-b border-ink-200 py-6 first:border-t">
      <label className="flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
        {label}
        {required ? <span className="text-[10px] text-accent">REQUIRED</span> : null}
        {optional ? <span className="text-[10px] text-ink-400">OPTIONAL</span> : null}
      </label>
      {children}
    </div>
  );
}

function Pill({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-200 ${
        on
          ? 'border-ink-900 bg-ink-900 text-ink-50'
          : 'border-ink-300 bg-transparent text-ink-700 hover:border-ink-700'
      }`}
    >
      {children}
    </button>
  );
}
