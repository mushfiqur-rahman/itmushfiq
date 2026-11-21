import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  // যেহেতু data ফোল্ডারটি src এর ভেতরে, তাই base হবে "./src/data/blog"
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.string(), // তারিখের টাইপ এরর ফিক্স করতে coerce ব্যবহার করা হয়েছে
    updatedDate: z.string().optional(),
    author: z.string().default("Mushfiqur Rahman"),
    category: z.string(),
    // true: Case Studies listing; false/omitted: Blog and homepage articles.
    caseStudy: z.boolean().default(false),
    image: z.string(),
    imageAlt: z.string().optional(),
    citation: z.string().url().optional(),
    // Optional shorter <title> for search results; the on-page H1 keeps `title`.
    metaTitle: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
