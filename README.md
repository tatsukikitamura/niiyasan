# 会社名(仮) — Site

Vite + React + TypeScript + Tailwind CSS で構築。GitHub Pages へ自動デプロイ。

## ローカル開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
npm run preview
```

## GitHub Pages へのデプロイ

1. GitHub にこのリポジトリを push
2. リポジトリの **Settings → Pages** で **Source** を **GitHub Actions** に設定
3. `main` ブランチへの push、または Actions タブからの手動実行で `.github/workflows/deploy.yml` が走り、`dist/` の中身が Pages に公開される

`vite.config.ts` の `base: './'` により、`username.github.io/<repo>/` 配下でも、独自ドメインでも、相対パスで動作する。
