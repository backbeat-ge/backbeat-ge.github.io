import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://vichango.github.io',
  base: '/backbeat-astro',
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