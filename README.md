# Moovit — Site

Astro + TypeScript + Tailwind CSS v4 で構築。GitHub Pages へ自動デプロイ。

## ローカル開発

```bash
npm install
npm run dev          # http://localhost:4321/niiyasan/
```

`astro.config.mjs` で `base: '/niiyasan/'` を設定しているため、`/` ではなく `/niiyasan/` 配下に出る。

## 公開先

`https://tatsuki.dev/niiyasan/` (GitHub Pages サブパス配下)

ユーザの独自ドメイン `tatsuki.dev` 配下のプロジェクトページとして配信されている前提。

## ビルド / プレビュー

```bash
npm run build        # dist/ に静的サイトを生成
npm run preview      # dist/ をローカルで配信
```

## 型チェック

```bash
npm run typecheck    # astro check
```

## ディレクトリ構成

```
src/
  layouts/Base.astro            # 共通 <head> / Nav / Footer ラッパ
  components/
    SEO.astro                   # title / description / canonical / OG / JSON-LD
    Nav.astro                   # 静的リンク + モバイルメニュー (inline JS)
    Footer.astro
    Reveal.astro                # animation-timeline: view() ベース、IntersectionObserver fallback
    icons.astro                 # logo / arrow / arrow-diag を name で分岐
    ui/                         # Shell / Eyebrow / Label / SecHead / Btn / PageWrap
  pages/
    index.astro                 # Home
    about.astro
    services.astro
    contact.astro                # mailto: 起動 (TODO: Formspree 等への差替を検討)
    404.astro
    works/index.astro
    works/[slug].astro          # CreativeWork JSON-LD
    blog/index.astro
    blog/[...slug].astro        # BlogPosting JSON-LD
  content/
    works/*.md                  # 案件 1 つにつき 1 ファイル
    blog/*.md
  content.config.ts             # Zod スキーマ
  styles/global.css             # Tailwind v4 @theme + 自己ホストフォント import
  utils/*.ts                    # 画像解決ヘルパ等
public/
  favicon.svg
  og-default.svg                # TODO: 本番前に PNG (1200x630) に差し替え
  robots.txt
  images/                       # ローカル画像 (works などの実写真)
```

## GitHub Pages へのデプロイ

1. GitHub にこのリポジトリを push
2. リポジトリの **Settings → Pages** で **Source** を **GitHub Actions** に設定
3. `main` ブランチへの push、または Actions タブからの手動実行で `.github/workflows/deploy.yml` が走り、`dist/` の中身が Pages に公開される

## 本番デプロイ前の TODO

- [ ] `public/og-default.png` (1200x630, PNG) を作成して配置 (現在は SVG プレースホルダ)
- [ ] `src/content/blog/*.md` の本文を執筆
- [ ] `src/content/works/*.md` の本文・画像を更新
- [ ] `src/pages/contact.astro` のメール送信先 (`MAIL_TO`) を実運用アドレスに更新
- [ ] `src/components/Footer.astro` の `social` 配列に SNS リンクを追加 (現在は空のため非表示)

## 将来 Moovit 専用ドメインを取得した場合

1. `astro.config.mjs` の `site` を新ドメインに変更、`base: '/niiyasan/'` を削除
2. `public/robots.txt` の `Sitemap:` URL を新ドメインに差し替え
3. 必要なら `public/CNAME` を追加
4. すべての `<a href={withBase('/...')}>` を `<a href="/...">` に戻すか、`withBase` のままでも動く (BASE_URL が `/` になるので透過)
5. README の「公開先」「ローカル開発」セクションを更新
