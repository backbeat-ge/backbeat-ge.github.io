import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/subdomain' : '';

export default defineConfig({
  site: 'https://vichango.github.io',
  base: basePath,
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  integrations: [tailwind()]
});
