type PlaceholderOpts = {
  w?: number;
  h?: number;
  label?: string;
};

export function makePlaceholder(seed: number, opts: PlaceholderOpts = {}): string {
  const { w = 800, h = 600, label = '' } = opts;
  const palettes = [
    ['#0e0d0c', '#2c2b28', '#6e6c64', '#c8c6bf'],
    ['#1a1917', '#4a4844', '#9c9a92', '#e8e7e3'],
    ['#0e0d0c', '#1a1917', '#4a4844', '#c8c6bf'],
    ['#2c2b28', '#6e6c64', '#9c9a92', '#fafaf9'],
  ];
  const p = palettes[seed % palettes.length];
  const variants: Array<() => string> = [
    () => `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='xMidYMid slice'>
      <defs><filter id='n${seed}'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='${seed}'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0'/></filter></defs>
      <rect width='100%' height='100%' fill='${p[1]}'/>
      <circle cx='${w * 0.7}' cy='${h * 0.45}' r='${h * 0.42}' fill='${p[2]}'/>
      <circle cx='${w * 0.25}' cy='${h * 0.7}' r='${h * 0.18}' fill='${p[3]}' opacity='0.6'/>
      <rect width='100%' height='100%' filter='url(#n${seed})'/>
    </svg>`,
    () => `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='xMidYMid slice'>
      <rect width='100%' height='100%' fill='${p[0]}'/>
      <rect x='${w * 0.0}' width='${w * 0.32}' height='${h}' fill='${p[2]}'/>
      <rect x='${w * 0.42}' width='${w * 0.18}' height='${h}' fill='${p[1]}'/>
      <rect x='${w * 0.7}' width='${w * 0.04}' height='${h}' fill='${p[3]}'/>
    </svg>`,
    () => `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='xMidYMid slice'>
      <rect width='100%' height='100%' fill='${p[2]}'/>
      <polygon points='0,${h} ${w},0 ${w},${h * 0.4} 0,${h}' fill='${p[1]}'/>
      <polygon points='0,${h} ${w * 0.6},${h} 0,${h * 0.5}' fill='${p[0]}'/>
    </svg>`,
    () => `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='xMidYMid slice'>
      <rect width='100%' height='100%' fill='${p[3]}'/>
      <rect x='${w * 0.1}' y='${h * 0.15}' width='${w * 0.3}' height='${h * 0.3}' fill='${p[0]}'/>
      <rect x='${w * 0.55}' y='${h * 0.1}' width='${w * 0.35}' height='${h * 0.55}' fill='${p[1]}'/>
      <rect x='${w * 0.2}' y='${h * 0.55}' width='${w * 0.25}' height='${h * 0.3}' fill='${p[2]}'/>
    </svg>`,
    () => `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='xMidYMid slice'>
      <defs><radialGradient id='g${seed}' cx='30%' cy='30%'><stop offset='0%' stop-color='${p[3]}'/><stop offset='100%' stop-color='${p[0]}'/></radialGradient></defs>
      <rect width='100%' height='100%' fill='url(#g${seed})'/>
      <circle cx='${w * 0.3}' cy='${h * 0.35}' r='${h * 0.22}' fill='${p[2]}' opacity='0.4'/>
    </svg>`,
    () => `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='xMidYMid slice'>
      <rect width='100%' height='100%' fill='${p[0]}'/>
      <text x='${w * 0.5}' y='${h * 0.55}' text-anchor='middle' fill='${p[3]}' font-family='Cormorant Garamond, serif' font-size='${h * 0.45}' font-style='italic' opacity='0.4'>${label || 'A'}</text>
      <line x1='${w * 0.1}' y1='${h * 0.85}' x2='${w * 0.9}' y2='${h * 0.85}' stroke='${p[2]}' stroke-width='1'/>
    </svg>`,
  ];
  const svg = variants[seed % variants.length]();
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

export function makePersonPh(seed: number): string {
  const w = 240;
  const h = 300;
  const tones = ['#3a3833', '#4a4844', '#2c2b28', '#26241f'];
  const t = tones[seed % tones.length];
  const lt = '#9c9a92';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='xMidYMid slice'>
    <rect width='100%' height='100%' fill='${t}'/>
    <circle cx='${w / 2}' cy='${h * 0.4}' r='${h * 0.18}' fill='${lt}' opacity='0.7'/>
    <ellipse cx='${w / 2}' cy='${h * 1.05}' rx='${h * 0.4}' ry='${h * 0.4}' fill='${lt}' opacity='0.7'/>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
