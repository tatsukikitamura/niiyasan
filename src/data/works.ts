import type { PhotoKind } from '../utils/placeholders';

export type WorkCat = 'Video' | 'Music' | 'Event';

export type Work = {
  t: string;
  c: WorkCat;
  y: string;
  sub: string;
  seed: number;
  kind: PhotoKind;
};

export const works: Work[] = [
  { t: '悠針れい / チノカテ', c: 'Video', y: '2026', sub: 'Music Video · 4K', seed: 1, kind: 'music-video' },
  { t: 'Sleeping Garden — EP', c: 'Music', y: '2026', sub: 'Compose · Mix · Master', seed: 2, kind: 'music' },
  { t: 'Mermaid Live 2026', c: 'Event', y: '2026', sub: 'Live Show · Tokyo Garden Theater', seed: 3, kind: 'live' },
  { t: 'Quiet River', c: 'Music', y: '2025', sub: 'Original Score', seed: 4, kind: 'music' },
  { t: 'Tokyo Sound Walk', c: 'Video', y: '2025', sub: 'Documentary · 24min', seed: 5, kind: 'documentary' },
  { t: '藤川 結衣 — 個展「白の空気」', c: 'Event', y: '2025', sub: 'Exhibition Production', seed: 6, kind: 'exhibition' },
  { t: '夜想曲 / Nocturne', c: 'Video', y: '2025', sub: 'Music Video', seed: 1, kind: 'music-video' },
  { t: 'haru — 1st Single「ここから」', c: 'Music', y: '2025', sub: 'Produce · Arrangement', seed: 2, kind: 'music' },
  { t: 'MIDNIGHT POPUP', c: 'Event', y: '2025', sub: 'Pop-up Store · Daikanyama', seed: 3, kind: 'exhibition' },
  { t: '石川 茉莉 — Tour 2025', c: 'Event', y: '2025', sub: 'Tour Production · 6 cities', seed: 4, kind: 'live' },
  { t: 'Field Recordings vol.1', c: 'Music', y: '2024', sub: 'Sound Design · Compilation', seed: 5, kind: 'music' },
  { t: 'Documentary: 街を編む人', c: 'Video', y: '2024', sub: 'Documentary · 48min', seed: 6, kind: 'documentary' },
];
