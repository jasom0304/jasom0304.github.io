import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkBlankLines from './src/lib/remark-blank-lines.mjs';

// 上線時，GitHub 會自動填入網址（見 .github/workflows/deploy.yml），這裡不用手動改。
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  // 自動產生網站地圖（sitemap），讓 Google 知道有哪些頁面。
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  markdown: {
    // 多按的空行也會顯示。
    remarkPlugins: [remarkBlankLines],
  },
});
