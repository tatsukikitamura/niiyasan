/**
 * astro.config.mjs の `base` (例: `/niiyasan/`) を path に前置する。
 *
 * - 戻り値は常に `${BASE_URL}${path}` 形式 (BASE_URL は末尾スラッシュ付き)。
 * - 入力 path の先頭スラッシュは無視するので、`withBase('/about/')` も `withBase('about/')` も同じ。
 * - 末尾スラッシュは入力のまま尊重する (trailingSlash: 'always' 設定との整合のため)。
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // 例: '/niiyasan/'
  return base + path.replace(/^\//, '');
}
