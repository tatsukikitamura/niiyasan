import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Arrow } from './icons';

type DivProps = HTMLAttributes<HTMLDivElement>;

export function Shell({ className = '', children, ...rest }: DivProps & { children: ReactNode }) {
  return (
    <div className={`mx-auto w-full max-w-shell px-gutter ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 before:inline-block before:h-px before:w-6 before:bg-ink-500 before:content-[''] ${className}`}
    >
      {children}
    </span>
  );
}

export function Label({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 ${className}`}
    >
      {children}
    </span>
  );
}

export function SecHead({
  eyebrow,
  title,
  right,
  className = '',
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  right?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16 ${className}`}
    >
      <div className="flex flex-col gap-4">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="font-serif text-h1 font-normal text-ink-900">{title}</h2>
      </div>
      {right ? <div className="max-w-[540px] text-ink-600">{right}</div> : null}
    </div>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button' | 'a';
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  withArrow?: boolean;
};

export function Btn({
  variant = 'primary',
  className = '',
  children,
  withArrow = true,
  as = 'a',
  ...rest
}: BtnProps) {
  const base =
    'group inline-flex cursor-pointer items-center gap-2.5 rounded-full px-7 py-4 font-mono text-[12px] uppercase tracking-[0.16em] transition-all duration-300';
  const variants = {
    primary: 'bg-ink-900 text-ink-50 hover:bg-accent',
    ghost: 'border border-ink-300 bg-transparent text-ink-800 hover:border-ink-800 hover:bg-ink-0',
  } as const;
  const cls = `${base} ${variants[variant]} ${className}`;

  if (as === 'button') {
    return (
      <button className={cls} {...rest}>
        {children}
        {withArrow ? <Arrow /> : null}
      </button>
    );
  }
  return (
    <a className={cls} {...(rest as HTMLAttributes<HTMLAnchorElement>)}>
      {children}
      {withArrow ? <Arrow /> : null}
    </a>
  );
}

export function PageWrap({ children }: { children: ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
