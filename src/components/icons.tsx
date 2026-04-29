type SvgSize = { s?: number; className?: string };

export function Logo({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" stroke={color} strokeWidth="1" />
      <path d="M6 12 Q12 4 18 12 Q12 20 6 12 Z" fill={color} />
    </svg>
  );
}

export function Arrow({ s = 14, className = '' }: SvgSize) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 14 14"
      fill="none"
      className={`transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ArrowDiag({ s = 12, className = '' }: SvgSize) {
  return (
    <svg width={s} height={s} viewBox="0 0 12 12" fill="none" className={className}>
      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
