import { execSync } from 'node:child_process';
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
  /** 第一次上傳到 GitHub 的時間（毫秒）。還沒上傳的文章是 Infinity，排最前面。 */
  firstUpload: number;
}

// 從 git 紀錄找出每個檔案第一次被提交的時間。檔案改名也會沿用原本的時間。
let uploadTimes: Map<string, number> | undefined;
function getUploadTimes(): Map<string, number> {
  if (uploadTimes) return uploadTimes;
  uploadTimes = new Map();
  try {
    const log = execSync(
      'git -c core.quotepath=off log --reverse --format=@%ct --name-status -M -- src/content/posts',
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    );
    let time = 0;
    for (const line of log.split('\n')) {
      if (line.startsWith('@')) {
        time = Number(line.slice(1)) * 1000;
        continue;
      }
      const [status, a, b] = line.split('\t');
      if (!status) continue;
      if (status === 'A' && !uploadTimes.has(a)) uploadTimes.set(a, time);
      else if (status.startsWith('R') && b) uploadTimes.set(b, uploadTimes.get(a) ?? time);
    }
  } catch {
    // 沒有 git 紀錄時，就退回用文章日期排序。
  }
  return uploadTimes;
}

// 檔案路徑決定語言和分類：posts/zh/exchange/my-post.md → zh、exchange、my-post
export async function getAllPosts(): Promise<Post[]> {
  const all = await getCollection('posts', (e) => !e.data.draft);
  const times = getUploadTimes();
  return all
    .map((entry) => {
      const [lang, category, ...rest] = entry.id.split('/');
      const file = `src/content/posts/${entry.id}.md`;
      return {
        entry,
        lang: lang as Lang,
        category,
        slug: rest.join('-'),
        title: entry.data.title,
        date: entry.data.date,
        summary: entry.data.summary,
        firstUpload: times.size ? (times.get(file) ?? Infinity) : entry.data.date.getTime(),
      };
    })
    .filter((p) => p.slug)
    .sort((a, b) => b.firstUpload - a.firstUpload || b.date.getTime() - a.date.getTime());
}

export async function getPosts(lang: Lang): Promise<Post[]> {
  return (await getAllPosts()).filter((p) => p.lang === lang);
}
