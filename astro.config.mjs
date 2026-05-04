import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// 公開先: https://tatsuki.dev/niiyasan/
// site = ドメインルート (https://tatsuki.dev/) で末尾スラッシュ必須
// base = リポジトリ配下のサブパス (/niiyasan/)
// TODO: 独自ドメインを Moovit ブランド向けに取得した暁には base を外し、site を差し替える。
const SITE = 'https://tatsuki.dev/';
const BASE = '/niiyasan/';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), mdx()],
});
