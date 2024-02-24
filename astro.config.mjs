import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://vichango.github.io',
  base: process.env.TINA_BASE_PATH ? `/${process.env.TINA_BASE_PATH}` : "",
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  integrations: [tailwind(), mdx()]
});