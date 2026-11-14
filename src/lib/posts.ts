import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../site';

export interface Post {
  entry: CollectionEntry<'posts'>;
  lang: Lang;
  category: string;
  slug: string;
  title: string;
  date: Date;
  summary: string;
}

// 檔案路徑決定語言和分類：posts/zh/exchange/my-post.md → zh、exchange、my-post
export async function getAllPosts(): Promise<Post[]> {
  const all = await getCollection('posts', (e) => !e.data.draft);
  return all
    .map((entry) => {
      const [lang, category, ...rest] = entry.id.split('/');
      return {
        entry,
        lang: lang as Lang,
        category,
        slug: rest.join('-'),
        title: entry.data.title,
        date: entry.data.date,
        summary: entry.data.summary,
      };
    })
    .filter((p) => p.slug)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getPosts(lang: Lang): Promise<Post[]> {
  return (await getAllPosts()).filter((p) => p.lang === lang);
}
