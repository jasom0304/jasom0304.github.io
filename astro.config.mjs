import { defineConfig } from 'astro/config';

// 上線時，GitHub 會自動填入網址（見 .github/workflows/deploy.yml），這裡不用手動改。
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
});
