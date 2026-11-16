// 全站設定。改這裡，整個網站一起更新。

export type Lang = 'zh' | 'en';

export const site = {
  // 聯絡信箱。留空就不顯示。
  email: '',
  // 留言功能（giscus）。四個值都填好才會出現留言區。到 https://giscus.app 取得。
  giscus: {
    repo: '',
    repoId: '',
    category: '',
    categoryId: '',
  },
};

// 分類在 src/data/categories.json，可以在網站後台（/admin）新增、改名、調整順序。
// 英文名稱留空時，英文版先顯示中文名稱。
import categoryData from './data/categories.json';

interface CategoryText {
  name: string;
  desc?: string;
}
export interface Category {
  id: string;
  zh: CategoryText;
  en: CategoryText;
}
export const categories: Category[] = categoryData.categories.map((c: any) => ({
  id: c.id,
  zh: { name: c.zh?.name ?? c.id, desc: c.zh?.desc ?? '' },
  en: { name: c.en?.name || c.zh?.name || c.id, desc: c.en?.desc || c.zh?.desc || '' },
}));

export const ui = {
  zh: {
    siteName: "小吉's Notes",
    author: '小吉',
    description: '小吉的筆記：學習心得、成長歷程、交換學生、投資、生活。',
    heroLines: ['走過的路，', '慢慢寫下來。'],
    intro: [
      '我是小吉。',
      '在這裡記下人生路上的事。寫給以後的自己看。',
    ],
    contents: '目錄',
    latest: '最新文章',
    allIn: (n: number) => `${n} 篇`,
    search: '搜尋',
    searchPlaceholder: '柏林、ETF、濾波器',
    searchHint: '輸入關鍵字，找標題、摘要、標籤和內文。',
    searchNone: '沒有符合的文章。換個關鍵字試試。',
    switchLang: 'English',
    theme: '深色模式',
    skip: '跳到內文',
    navLabel: '分類',
    tagged: (t: string) => `標籤：${t}`,
    tags: '標籤',
    empty: '這一類還沒有文章。',
    comments: '留言',
    contact: '想聊聊，寫信給我：',
    disclaimer: '這些是我的學習筆記，不是投資建議。',
    back: '回到',
    notFound: '找不到這一頁',
    notFoundBody: '網址可能打錯了，或文章已經搬家。',
    home: '回首頁',
  },
  en: {
    siteName: "Jason's Notes",
    author: 'Jason',
    description: "Jason's notes on learning, growing up, exchange study, investing, and life.",
    heroLines: ['Roads taken,', 'written down slowly.'],
    intro: [
      "I'm Jason. ",
      'I write down things from the road of life here. Written for my later self.',
    ],
    contents: 'Contents',
    latest: 'Latest posts',
    allIn: (n: number) => (n === 1 ? '1 post' : `${n} posts`),
    search: 'Search',
    searchPlaceholder: 'Berlin, ETF, filter',
    searchHint: 'Type a keyword to search titles, summaries, tags, and text.',
    searchNone: 'No posts match. Try another keyword.',
    switchLang: '中文',
    theme: 'Dark mode',
    skip: 'Skip to content',
    navLabel: 'Categories',
    tagged: (t: string) => `Tag: ${t}`,
    tags: 'Tags',
    empty: 'No posts here yet.',
    comments: 'Comments',
    contact: 'Want to talk? Write to me: ',
    disclaimer: 'These are my study notes, not investment advice.',
    back: 'Back to',
    notFound: 'Page not found',
    notFoundBody: 'The address may be wrong, or the post has moved.',
    home: 'Go to home',
  },
};
