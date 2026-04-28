import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages のプロジェクトページ配下で動かすため、相対パスで出力する。
// `username.github.io/<repo>/` の形でも、`/` の形でも壊れずに動く。
export default defineConfig({
  base: './',
  plugins: [react()],
});
