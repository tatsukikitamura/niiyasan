/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          0: 'var(--ink-0)',
          50: 'var(--ink-50)',
          100: 'var(--ink-100)',
          200: 'var(--ink-200)',
          300: 'var(--ink-300)',
          400: 'var(--ink-400)',
          500: 'var(--ink-500)',
          600: 'var(--ink-600)',
          700: 'var(--ink-700)',
          800: 'var(--ink-800)',
          900: 'var(--ink-900)',
        },
        accent: 'var(--accent)',
      },
      fontFamily: {
        serif: 'var(--font-serif)',
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      maxWidth: {
        shell: '1440px',
      },
      spacing: {
        gutter: 'var(--gutter)',
        nav: '72px',
      },
      fontSize: {
        display: ['clamp(56px, 9vw, 144px)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        h1: ['clamp(40px, 5.4vw, 84px)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        h2: ['clamp(28px, 3.4vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        hero: ['clamp(52px, 8.5vw, 140px)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        lede: ['clamp(20px, 2vw, 26px)', { lineHeight: '1.55', letterSpacing: '-0.005em' }],
        marquee: ['clamp(28px, 4vw, 56px)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'feat-title': ['clamp(20px, 1.6vw, 28px)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'svc-title': ['clamp(28px, 2.6vw, 38px)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'about-quote': ['clamp(36px, 4vw, 64px)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'blog-hero': ['clamp(64px, 9vw, 144px)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        'blog-feature': ['clamp(28px, 3vw, 44px)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'contact-hero': ['clamp(56px, 7vw, 112px)', { lineHeight: '0.96', letterSpacing: '-0.025em' }],
        'numbers-v': ['clamp(48px, 5vw, 80px)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'footer-q': ['clamp(36px, 4.5vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        eyebrow: '0.18em',
        mono: '0.16em',
      },
      keyframes: {
        pageIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        rise: {
          from: { transform: 'translateY(110%)' },
          to: { transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'page-in': 'pageIn 0.5s ease',
        rise: 'rise 1s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        marquee: 'marquee 40s linear infinite',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
      transitionDuration: {
        700: '700ms',
        800: '800ms',
        900: '900ms',
      },
      padding: {
        section: 'clamp(80px, 10vw, 160px)',
        'section-tight': 'clamp(56px, 7vw, 96px)',
      },
    },
  },
  plugins: [],
};
