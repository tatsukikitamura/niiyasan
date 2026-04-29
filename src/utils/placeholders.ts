type PlaceholderOpts = {
  w?: number;
  h?: number;
  label?: string;
};

export type PhotoKind =
  | 'music-video'
  | 'music'
  | 'live'
  | 'documentary'
  | 'exhibition'
  | 'studio'
  | 'street'
  | 'person';

const PHOTO_IDS: Record<PhotoKind, string[]> = {
  'music-video': [
    'photo-1470225620780-dba8ba36b745',
    'photo-1493225457124-a3eb161ffa5f',
    'photo-1516280440614-37939bbacd81',
    'photo-1501386761578-eac5c94b800a',
    'photo-1459749411175-04bf5292ceea',
    'photo-1485579149621-3123dd979885',
  ],
  music: [
    'photo-1598488035139-bdbb2231ce04',
    'photo-1505740420928-5e560c06d30e',
    'photo-1471478331149-c72f17e33c73',
    'photo-1511671782779-c97d3d27a1d4',
    'photo-1520523839897-bd0b52f945a0',
    'photo-1487180144351-b8472da7d491',
  ],
  live: [
    'photo-1429962714451-bb934ecdc4ec',
    'photo-1540039155733-5bb30b53aa14',
    'photo-1533174072545-7a4b6ad7a6c3',
    'photo-1514525253161-7a46d19cd819',
    'photo-1506157786151-b8491531f063',
    'photo-1524368535928-5b5e00ddc76b',
  ],
  documentary: [
    'photo-1540959733332-eab4deabeeaf',
    'photo-1480796927426-f609979314bd',
    'photo-1542051841857-5f90071e7989',
    'photo-1503899036084-c55cdd92da26',
    'photo-1554797589-7241bb691973',
    'photo-1493997181344-712f2f19d87a',
  ],
  exhibition: [
    'photo-1531913764164-f85c52e6e654',
    'photo-1577720580479-7d839d829c73',
    'photo-1545033131-485ea67fd7c3',
    'photo-1566054757965-8c4085344c96',
  ],
  studio: [
    'photo-1497366216548-37526070297c',
    'photo-1497366811353-6870744d04b2',
    'photo-1568992687947-868a62a9f521',
    'photo-1505330622279-bf7d7fc918f4',
  ],
  street: [
    'photo-1542931287-023b922fa89b',
    'photo-1534430480872-3498386e7856',
    'photo-1554797589-7241bb691973',
    'photo-1480796927426-f609979314bd',
  ],
  person: [
    'photo-1494790108377-be9c29b29330',
    'photo-1500648767791-00dcc994a43e',
    'photo-1506794778202-cad84cf45f1d',
    'photo-1438761681033-6461ffad8d80',
    'photo-1531123897727-8f129e1688ce',
    'photo-1544005313-94ddf0286df2',
  ],
};

export function photoFor(
  kind: PhotoKind,
  seed: number,
  opts: { w?: number; h?: number } = {}
): string {
  const { w = 1200, h = 800 } = opts;
  const ids = PHOTO_IDS[kind];
  const id = ids[((seed % ids.length) + ids.length) % ids.length];
  return `https://images.unsplash.com/${id}?w=${w}&h=${h}&q=80&auto=format&fit=crop`;
}

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
  return photoFor('person', seed, { w: 240, h: 300 });
}
