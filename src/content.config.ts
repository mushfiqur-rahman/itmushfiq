import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  // যেহেতু data ফোল্ডারটি src এর ভেতরে, তাই base হবে "./src/data/blog"
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.string(), // তারিখের টাইপ এরর ফিক্স করতে coerce ব্যবহার করা হয়েছে
    author: z.string().default("Mushfiqur Rahman"),
    category: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
