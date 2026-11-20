// @ts-check
import { defineConfig } from "astro/config";
import { rename } from "node:fs/promises";
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

  integrations: [
    sitemap({ serialize: item => ({ ...item, lastmod: sitemapLastmod(item.url) }) }),
    {
      name: "sitemap-public-url",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          // Run after sitemap generation and preserve its chunk references.
          await rename(new URL("sitemap-index.xml", dir), new URL("sitemap.xml", dir));
        },
      },
    },
    icon(),
  ],
});
