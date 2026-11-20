// @ts-check
import { defineConfig } from "astro/config";
import { readdir, rename, rm } from "node:fs/promises";
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
          // Publish every URL directly in /sitemap.xml (a <urlset>, not an index).
          const chunks = (await readdir(dir)).filter(name => /^sitemap-\d+\.xml$/.test(name));
          if (chunks.length !== 1) throw new Error(`Expected one sitemap chunk, found ${chunks.length}`);
          await rename(new URL(chunks[0], dir), new URL("sitemap.xml", dir));
          await rm(new URL("sitemap-index.xml", dir));
        },
      },
    },
    icon(),
  ],
});
