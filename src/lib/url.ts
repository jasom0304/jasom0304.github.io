import type { Lang } from '../site';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// 產生站內連結。path 例：'' 、'exchange/'、'exchange/my-post/'
export function href(lang: Lang, path = ''): string {
  return `${base}${lang === 'en' ? '/en' : ''}/${path}`;
}

export function asset(path: string): string {
  return `${base}/${path}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-TW' : 'en-GB', {
    year: 'numeric',
    month: lang === 'zh' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
