// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://studios14th.com/',
  vite: {
      plugins: [tailwindcss()],
  }, 

  i18n: {
      locales: ["en", "es"],
      defaultLocale: "en",
  },
  image: {
    domains: ["cms.studios14th.com"]
  },
  integrations: [icon(), sitemap({
    filter: (page) => page !== 'https://studios14th.com/example'
  })]
});