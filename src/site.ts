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

// 分類。要新增一類：在這裡加一筆，再到 src/content/posts/zh 和 en 底下開同名資料夾。
export const categories = [
  {
    id: 'exchange',
    zh: { name: '交換學生', desc: '在國外念書和生活的紀錄。' },
    en: { name: 'Exchange', desc: 'Studying and living abroad.' },
  },
  {
    id: 'events',
    zh: { name: '活動經歷', desc: '參加過的活動、比賽和社團。' },
    en: { name: 'Events', desc: 'Activities, contests, and clubs I joined.' },
  },
  {
    id: 'invest',
    zh: { name: '投資', desc: '學投資時讀到的觀念和教訓。' },
    en: { name: 'Investing', desc: 'Ideas and lessons from learning to invest.' },
  },
  {
    id: 'research',
    zh: { name: '研究主題', desc: '研究所在做什麼，用白話講。' },
    en: { name: 'Research', desc: 'What I work on in grad school, in plain words.' },
  },
];

export const ui = {
  zh: {
    siteName: "小吉's Notes",
    author: '小吉',
    description: '小吉的筆記：交換學生、活動經歷、投資、研究主題。',
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
    description: "Jason's notes on exchange study, events, investing, and research.",
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
