import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const photoKindEnum = z.enum([
  'music-video',
  'music',
  'live',
  'documentary',
  'exhibition',
  'studio',
  'street',
  'person',
]);

const workCategoryEnum = z.enum(['Video', 'Music', 'Event']);

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    category: workCategoryEnum,
    year: z.string(),
    subtitle: z.string(),
    /** placeholder 用 seed と kind */
    seed: z.number(),
    kind: photoKindEnum,
    /** ローカル画像があるときのサイトルート相対パス */
    image: z.string().optional(),
    /** SEO description (未指定なら subtitle を使う) */
    description: z.string().optional(),
    /** index 表示順 (小さいほど先頭) */
    order: z.number().default(100),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** ISO 日付 (yyyy-mm-dd) */
    date: z.string(),
    category: z.string(),
    /** 一覧用の短いリード文 */
    excerpt: z.string().optional(),
    /** featured カードに上げるか */
    featured: z.boolean().default(false),
    /** カード画像のローカルパス。未指定はプレースホルダ */
    image: z.string().optional(),
    seed: z.number().default(1),
    kind: photoKindEnum.default('studio'),
    /** SEO description */
    description: z.string().optional(),
  }),
});

export const collections = { works, blog };
