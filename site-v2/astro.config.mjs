import { defineConfig } from 'astro/config';

// The organization site is published at /; fork previews use BASE_PATH.
export default defineConfig({
  site: process.env.SITE_URL || 'https://yaya-etiabi.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
});
