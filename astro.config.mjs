// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";
import { sitemapLastmod } from "./scripts/sitemap-lastmod.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://itsupportbee.com",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({ serialize: item => ({ ...item, lastmod: sitemapLastmod(item.url) }) }), icon()],
});
